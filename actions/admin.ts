"use server";

import { currentActiveRole } from "@/lib/auth";

export const admin = async () => {
  const activeRole = await currentActiveRole();

  if (activeRole === "Admin") {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" }
};
