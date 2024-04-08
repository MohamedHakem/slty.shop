import { auth } from "@/auth";
import { Entity } from "@prisma/client";

export const currentUser = async () => {
  const session = await auth();
  return session?.user;
};

export const currentUserRoles = async () => {
  const session = await auth();
  return session?.user?.roles;
};

export const currentActiveRole = async () => {
  const session = await auth();
  return session?.user?.activeRole;
};

export const currentEntity = async () => {
  const session = await auth();
  // const { createdAt, updatedAt, ...rest } = session?.user.entity as Entity
  return session?.user.entity;
};