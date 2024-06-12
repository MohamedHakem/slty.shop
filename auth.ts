import NextAuth from "next-auth";
import { ActiveRole, Entity, UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { getTwoFactorConfirmationByUserId } from "@/data/auth/two-factor-confirmation";
import { getAccountByUserId } from "./data/auth/account";
import { getEntityByUserId } from "./data/entity";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
    newUser: "/onboarding",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      // if user id doesn't exist, then this user is not in the db, or do "as string"
      if (!user.id) return false;

      const existingUser = await getUserById(user.id);
      // Prevent sign in without email verification
      if (!existingUser || !existingUser?.emailVerified) return false;

      // check if user has the user role
      const userRole = existingUser.userRoles.find((r) => r.name === "User");
      // user exists and email-verified, but has no role, add basic role, "USER"/default role id is 1
      if (!userRole)
        await db.userRole.create({
          data: { userId: existingUser.id, roleId: 1 },
        });

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        );
        if (!twoFactorConfirmation) return false;
        // Delete two factor confirmation to re-use it for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      const existingAccount = await getAccountByUserId(existingUser.id);
      const userEntity = await getEntityByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.roles = existingUser.userRoles;
      token.emailVerified = existingUser.emailVerified;
      token.activeRole = existingUser.activeRole;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      token.entity = userEntity;

      return token;
    },
    async session({ token, session }) {
      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
        session.user.emailVerified = token.emailVerified as Date & string;
        if (token.roles) session.user.roles = token.roles as UserRole[];
        if (token.entity) session.user.entity = token.entity as Entity;
        if (token.email) session.user.email = token.email as string;
        session.user.activeRole = token.activeRole as ActiveRole;
        session.user.isOAuth = token.isOAuth as boolean;
        if (token.sub) session.user.id = token.sub;
        session.user.name = token.name;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
