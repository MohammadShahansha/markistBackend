import { z } from 'zod';

const originalClothlothValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    img: z.string(),
    category: z.string().min(1, 'Category is required'),
    size: z.enum(['S', 'M', 'L', 'XL', 'XXL']).optional(),
    color: z.string().min(1, 'Color is required'),
    price: z.number().min(0, 'Price must be a positive number'),
    available: z.boolean(),
    description: z.string().min(1, 'Description is required'),
  }),
});
const updateClothlothValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').optional(),
    img: z.string().optional(),
    category: z.string().min(1, 'Category is required').optional(),
    size: z.enum(['S', 'M', 'L', 'XL', 'XXL']).optional(),
    color: z.string().min(1, 'Color is required').optional(),
    price: z.number().min(0, 'Price must be a positive number').optional(),
    available: z.boolean(),
    description: z.string().min(1, 'Description is required').optional(),
  }),
});

export const clothValidationSchema = {
  originalClothlothValidationSchema,
  updateClothlothValidationSchema,
};
