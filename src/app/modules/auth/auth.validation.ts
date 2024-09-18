import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'It is must required' }),
    password: z.string({ required_error: 'It is must be required' }),
  }),
});

const passwordChangeValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: 'It is must required' }),
    newPassword: z.string({ required_error: 'It is must be required' }),
  }),
});

export const loginValidation = {
  loginValidationSchema,
  passwordChangeValidationSchema,
};
