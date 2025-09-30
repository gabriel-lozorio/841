import { ErrorCode } from '../constants/errorCodes';
import { HttpStatus } from '../constants/httpStatus';

/**
 * @interface AppError
 * @description Custom application error class
 * 
 * @property {number} statusCode - HTTP status code
 * @property {string} message - Error message
 * @property {ErrorCode} code - Application error code
 * @property {any} details - Additional error details
 */
export class AppError extends Error {
  statusCode: number;
  code: ErrorCode;
  details: any;

  constructor(message: string, statusCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR, code: ErrorCode = ErrorCode.INTERNAL_SERVER_ERROR, details: any = null) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * @interface ValidationError
 * @description Error for validation failures
 */
export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed', details: any = null) {
    super(message, HttpStatus.UNPROCESSABLE_ENTITY, ErrorCode.VALIDATION_ERROR, details);
  }
}

/**
 * @interface NotFoundError
 * @description Error for resource not found
 */
export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, HttpStatus.NOT_FOUND, ErrorCode.NOT_FOUND);
  }
}

/**
 * @interface UnauthorizedError
 * @description Error for authentication failures
 */
export class UnauthorizedError extends AppError {
  constructor(message: string = 'Authentication required') {
    super(message, HttpStatus.UNAUTHORIZED, ErrorCode.UNAUTHORIZED);
  }
}
