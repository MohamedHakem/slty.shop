import * as z from "zod";
// import { UserRole } from '@prisma/client';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  // role: z.array(z.string()),
  activeRole: z.string(),
  isTwoFactorEnabled: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    activeRole: z.enum(["User", "Admin", "Seller"]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "كلمة المرور الجديدة مطلوبة",
      path: ["newPassword"],
    },
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "كلمة المرور مطلوبة!",
      path: ["password"],
    },
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "6 احرف على الاقل مطلوبة",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "الايميل مطلوب بصيغة صحيحة",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "الايميل مطلوب بصيغة صحيحة",
  }),
  password: z.string().min(6, {
    message: "6 احرف على الاقل مطلوبة",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "الايميل مطلوب بصيغة صحيحة",
  }),
  password: z.string().min(6, {
    message: "6 احرف على الاقل مطلوبة",
  }),
});

export const EntityFormSchema = z.object({
  name: z.string().optional(),
  desc: z.string().optional(),
  image: z.string().optional(),
  phone: z.string().min(6, {
    message: "رقم الهاتف ضروري لأنه سيظهر للمشتري",
  }),
});
