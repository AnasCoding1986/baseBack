import { z } from 'zod';

const userZodSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(20, { message: 'Password must not exceed 20 characters' })
    .optional(),
});

export const UserValidation = {
  userZodSchema,
};
