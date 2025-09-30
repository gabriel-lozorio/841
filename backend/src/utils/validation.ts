import { z } from 'zod';

/**
 * @summary
 * Common validation schemas for API requests
 */

// Common validation patterns
export const zString = z.string().min(1, 'Field is required');
export const zNullableString = z.string().nullable();
export const zNumber = z.number();
export const zBoolean = z.boolean();
export const zDate = z.date();
export const zId = z.number().int().positive('ID must be a positive integer');

/**
 * @summary
 * Validates request data against a schema
 * 
 * @function validate
 * @module utils
 * 
 * @param {any} data - Data to validate
 * @param {z.ZodSchema} schema - Zod schema to validate against
 * @returns {[boolean, any]} Tuple with validation result and data/error
 */
export async function validate(data: any, schema: z.ZodSchema): Promise<[boolean, any]> {
  try {
    const validData = await schema.parseAsync(data);
    return [true, validData];
  } catch (error) {
    return [false, error];
  }
}
