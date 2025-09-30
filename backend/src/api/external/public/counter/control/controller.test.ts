import { Request, Response, NextFunction } from 'express';
import { postHandler } from './controller';
import { counterControlService } from '../../../../../services/counter/control';
import { CountingState } from '../../../../../services/counter/control/counterControlTypes';

// Mock the counter control service
jest.mock('../../../../../services/counter/control', () => ({
  counterControlService: {
    processCountingAction: jest.fn().mockReturnValue({
      state: 'iniciando',
      currentNumber: null,
      message: 'Iniciando...',
      buttonLabel: 'Reiniciar'
    })
  }
}));

describe('Counter Control Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {
      body: {}
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
  });

  it('should process start action and return success response', async () => {
    mockRequest.body = { action: 'start' };

    await postHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(counterControlService.processCountingAction).toHaveBeenCalledWith('start');
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      data: {
        state: 'iniciando',
        currentNumber: null,
        message: 'Iniciando...',
        buttonLabel: 'Reiniciar'
      },
      metadata: expect.objectContaining({
        timestamp: expect.any(String)
      })
    });
  });

  it('should process restart action and return success response', async () => {
    mockRequest.body = { action: 'restart' };

    await postHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(counterControlService.processCountingAction).toHaveBeenCalledWith('restart');
    expect(mockResponse.json).toHaveBeenCalled();
  });

  it('should use default action when none is provided', async () => {
    mockRequest.body = {};

    await postHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(counterControlService.processCountingAction).toHaveBeenCalledWith('start');
    expect(mockResponse.json).toHaveBeenCalled();
  });

  it('should return validation error for invalid action', async () => {
    mockRequest.body = { action: 'invalid' };

    await postHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
      success: false,
      error: expect.objectContaining({
        message: 'Invalid request parameters'
      })
    }));
  });

  it('should call next with error if service throws', async () => {
    const error = new Error('Test error');
    (counterControlService.processCountingAction as jest.Mock).mockImplementationOnce(() => {
      throw error;
    });

    await postHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockNext).toHaveBeenCalledWith(error);
  });
});
