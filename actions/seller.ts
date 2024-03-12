"use server";

import { currentActiveRole } from "@/lib/auth";

export const seller = async () => {
  const activeRole = await currentActiveRole();

  if (activeRole === "Seller") {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" }
};
