/**
 * @summary
 * Formats successful API responses
 * 
 * @function successResponse
 * @module utils
 * 
 * @param {any} data - The data to include in the response
 * @param {object} metadata - Optional metadata
 * @returns {object} Formatted success response
 */
export function successResponse(data: any, metadata: any = {}): any {
  return {
    success: true,
    data,
    metadata: {
      ...metadata,
      timestamp: new Date().toISOString()
    }
  };
}

/**
 * @summary
 * Formats error API responses
 * 
 * @function errorResponse
 * @module utils
 * 
 * @param {string} message - Error message
 * @param {object} details - Optional error details
 * @returns {object} Formatted error response
 */
export function errorResponse(message: string, details: any = null): any {
  return {
    success: false,
    error: {
      message,
      details
    },
    timestamp: new Date().toISOString()
  };
}
