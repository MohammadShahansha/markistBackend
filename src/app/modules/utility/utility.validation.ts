import { z } from 'zod';

const utilsValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    description: z.string(),
    brand: z.string().optional(),
    model: z.string().optional(),
    style: z.string().optional(),
    color: z.string().optional(),
    image: z.string(),
  }),
});
const updateUtilsValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    id: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    style: z.string().optional(),
    size: z.string().optional(),
    color: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const shoesValidation = {
  utilsValidationSchema,
  updateUtilsValidationSchema,
};
