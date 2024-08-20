import { z } from 'zod';

const booksValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    image: z.string(),
    description: z.string(),
    category: z.string(),
  }),
});

const updateBooksValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const booksValidation = {
  booksValidationSchema,
  updateBooksValidationSchema,
};
