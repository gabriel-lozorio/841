import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { errorResponse } from '../utils/responseFormatter';

/**
 * @summary
 * Global error handling middleware
 * 
 * @function errorMiddleware
 * @module middleware
 * 
 * @param {Error} error - The error object
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 */
export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction): void {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  
  logger.error('Error occurred', {
    path: req.path,
    method: req.method,
    statusCode,
    message,
    stack: error.stack
  });

  res.status(statusCode).json(errorResponse(message));
}
