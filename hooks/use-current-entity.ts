import { useSession } from "next-auth/react";

export const useCurrentEntity = () => {
  const session = useSession();
  return session.data?.user.entity;
};
