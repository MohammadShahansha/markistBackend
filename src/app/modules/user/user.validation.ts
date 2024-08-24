import { z } from 'zod';

export const userValidationSchema = z.object({
  body: z.object({
    userName: z.string(),
    email: z.string(),
    password: z.string({
      invalid_type_error: 'password must be string',
    }),
    needsPasswordChange: z.boolean(),
  }),
});
