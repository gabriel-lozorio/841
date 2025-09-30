import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '../../../../../utils/responseFormatter';
import { counterControlService } from '../../../../../services/counter/control';
import { z } from 'zod';

/**
 * @summary
 * Controls the counting process from 1 to 10 with timing and state management
 * 
 * @function postHandler
 * @module counter/control
 * 
 * @returns {Promise<void>} Response with current counter state and control information
 */
export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // Validate request body
    const schema = z.object({
      action: z.enum(['start', 'restart']).optional().default('start')
    });
    
    const validationResult = schema.safeParse(req.body);
    
    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        error: {
          message: 'Invalid request parameters',
          details: validationResult.error.format()
        },
        timestamp: new Date().toISOString()
      });
      return;
    }
    
    const { action } = validationResult.data;
    
    // Process the counting control action
    const result = counterControlService.processCountingAction(action);
    
    res.json(successResponse(result));
  } catch (error: any) {
    next(error);
  }
}
