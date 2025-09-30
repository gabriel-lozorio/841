import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/responseFormatter';
import jwt from 'jsonwebtoken';
import { config } from '../config';

/**
 * @summary
 * Authentication middleware to protect routes
 * 
 * @function authMiddleware
 * @module middleware
 * 
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next function
 */
export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      res.status(401).json(errorResponse('Authentication required'));
      return;
    }
    
    const decoded = jwt.verify(token, config.security.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json(errorResponse('Invalid authentication token'));
  }
}

// Extend Express Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
