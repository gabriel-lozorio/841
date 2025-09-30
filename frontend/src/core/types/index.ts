/**
 * @interface ApiResponse
 * @description A generic interface for successful API responses from the backend.
 */
export interface ApiResponse<T> {
  success: true;
  data: T;
  metadata: {
    timestamp: string;
    [key: string]: any;
  };
}

/**
 * @interface ApiErrorResponse
 * @description A generic interface for error API responses from the backend.
 */
export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    details: any | null;
  };
  timestamp: string;
}
