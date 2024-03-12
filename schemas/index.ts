import * as z from 'zod';
// import { UserRole } from '@prisma/client';

export const UserSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  // role: z.array(z.string()),
  activeRole: z.string(),
  isTwoFactorEnabled: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    activeRole: z.enum(['User', 'Admin', 'Seller']),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6))
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'New password is required!',
      path: ['newPassword']
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: 'Password is required!',
      path: ['password']
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum of 6 characters required'
  })
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required'
  })
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required'
  }),
  password: z.string().min(1, {
    message: 'Password is required'
  }),
  code: z.optional(z.string())
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required'
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required'
  }),
  name: z.string().min(1, {
    message: 'Name is required'
  })
});
