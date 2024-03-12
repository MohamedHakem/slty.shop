"use client";

import { useCurrentActiveRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";
import { ActiveRole } from "@prisma/client";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: ActiveRole;
};

export const RoleGate = ({
  children,
  allowedRole,
}: RoleGateProps) => {
  const activeRole = useCurrentActiveRole();

  if (activeRole !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    )
  }

  return <>{children}</>
};
