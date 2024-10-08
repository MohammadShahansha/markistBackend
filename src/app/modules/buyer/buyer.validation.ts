import { z } from 'zod';

export const buyerValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    quantity: z.number(),
    address: z.string(),
    phone: z.string(),
    date: z.string(),
    transectionId: z.string().optional(),
    productId: z.string(),
    productType: z.string(),
  }),
});
