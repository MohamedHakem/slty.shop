import { useSession } from "next-auth/react";

export const useCurrentActiveRole = () => {
  const session = useSession();
  return session.data?.user?.activeRole;
};
