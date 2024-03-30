import { db } from "@/lib/db";

export const getEntityByUserId = async (userId: string) => {
  try {
    const entity = await db.entity.findFirst({
      where: { owner_id: userId },
    });

    return entity;
  } catch {
    return null;
  }
};
