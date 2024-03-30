'use server';

import * as z from 'zod';
import { db } from '@/lib/db';
import { EntityFormSchema } from '@/schemas';
import { getUserById } from '@/data/user';
import { getEntityByUserId } from '@/data/entity';
import { EntityType } from '@prisma/client';

// Create entity requires minimum fields to be filled, later, update entity requires maximum fields to be filled 
export const createEntity = async (values: z.infer<typeof EntityFormSchema>, userId: string, entityType: EntityType, callbackUrl?: string | null) => {
  console.log("🚀 ~ createEntity ~ entityType:", entityType)

  if (!userId) {
    return { error: 'userId is required!' };
  }

  const validatedFields = EntityFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const existingUser = await getUserById(userId);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'لا يوجد حساب مرتبط بهذا الايميل' };
  }

  // if user has an entity already, return an error
  const existingEntity = await getEntityByUserId(userId);
  if (existingEntity) {
    return { error: 'لديك بالفعل حساب! ادخل الي لوحة التحكم للتعديل لإضافة إعلان او التعديل علي بيانات شركتك او متجرك. أو تواصل مع الدعم' };
  }

  const { phone: phone_number, name, image, desc: description } = validatedFields.data;

  try {
    const entity = await db.entity.create({
      data: {
        owner_id: userId,
        type: entityType === EntityType.COMPANY ? EntityType.COMPANY : EntityType.SHOP,
        phone_number,
        name,
        image,
        description,
      },
    });

    return { entity, success: "تم إنشاء حسابك بنجاح!" };
  } catch (error) {
    console.log("[createEntity] error: ", error)
    return { error: 'حدث خطأ اثناء انشاء حساب شركتك' };
  }
};
