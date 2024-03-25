import { ActiveRole, UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  roles: UserRole[];
  activeRole: ActiveRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  emailVerified: Date & string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
