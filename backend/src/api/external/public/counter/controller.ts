import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../../../../utils/responseFormatter';
import { counterService } from '../../../../services/counter';

/**
 * @summary
 * Returns a sequence of numbers from 1 to 10
 * 
 * @function getHandler
 * @module counter
 * 
 * @returns {Promise<void>} Response with numbers 1 to 10
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const numbers = counterService.getCountSequence();
    res.json(successResponse(numbers));
  } catch (error: any) {
    next(error);
  }
}
