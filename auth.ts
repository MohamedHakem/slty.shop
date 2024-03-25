import NextAuth from "next-auth";
import { ActiveRole, UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  // update,
  unstable_update,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  events: {
    async linkAccount({ user }) {
      console.log("🚀 ~ file: auth.ts ~ line 27 ~ linkAccount ~ user: ", user);
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log("🚀 ~ file: auth.ts ~ line 27 ~ signIn ~ user: ", user, ", account: ", account);

      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      if (!user.id) return false; // if user id doesn't exist, then this user is not in the db, or do "as string"

      console.log("🚀 ~ signIn ~ user:", user);
      const existingUser = await getUserById(user.id);
      console.log("🚀 ~ signIn ~ existingUser:", existingUser);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id,
        );

        if (!twoFactorConfirmation) return false;

        // Delete two factor confirmation for next sign in
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

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.roles = existingUser.userRoles;
      token.emailVerified = existingUser.emailVerified;
      token.activeRole = existingUser.activeRole;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.roles && session.user) {
        session.user.roles = token.roles as UserRole[];
        session.user.activeRole = token.activeRole as ActiveRole;
      }

      if (token.email) {
        session.user.email = token.email;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
        session.user.activeRole = token.activeRole as ActiveRole;
        session.user.isOAuth = token.isOAuth as boolean;
        session.user.email = token.email as string;
        session.user.name = token.name;
        session.user.emailVerified = token.emailVerified as Date & string;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
