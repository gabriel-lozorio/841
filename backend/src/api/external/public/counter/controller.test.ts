import { Request, Response, NextFunction } from 'express';
import { getHandler } from './controller';
import { counterService } from '../../../../services/counter';

// Mock the counter service
jest.mock('../../../../services/counter', () => ({
  counterService: {
    getCountSequence: jest.fn().mockReturnValue({ numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
  }
}));

describe('Counter Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      json: jest.fn()
    };
    mockNext = jest.fn();
  });

  it('should return a success response with numbers 1 to 10', async () => {
    await getHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(counterService.getCountSequence).toHaveBeenCalled();
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      data: { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      metadata: expect.objectContaining({
        timestamp: expect.any(String)
      })
    });
  });

  it('should call next with error if service throws', async () => {
    const error = new Error('Test error');
    (counterService.getCountSequence as jest.Mock).mockImplementationOnce(() => {
      throw error;
    });

    await getHandler(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockNext).toHaveBeenCalledWith(error);
  });
});
