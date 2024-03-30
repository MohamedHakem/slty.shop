import { ActiveRole, Entity, UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  roles: UserRole[];
  activeRole: ActiveRole;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  emailVerified: Date & string;
  entity: Entity;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
