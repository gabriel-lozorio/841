import { Request, Response } from 'express';
import { errorResponse } from '../utils/responseFormatter';

/**
 * @summary
 * Middleware for handling 404 Not Found errors
 * 
 * @function notFoundMiddleware
 * @module middleware
 * 
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json(errorResponse('Resource not found'));
}
