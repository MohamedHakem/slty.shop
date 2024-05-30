import { auth } from "@/auth";

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
  return session?.user.entity;
};