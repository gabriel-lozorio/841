import { api } from '@/core/lib/api';
import { ApiResponse } from '@/core/types';
import { CountSequence } from '../types';

/**
 * @service counterService
 * @summary Provides methods for all counter-related backend operations.
 * @domain counter
 * @type api-service
 */
export const counterService = {
  /**
   * @method getSequence
   * @summary Fetches a sequence of numbers from 1 to 10 from the backend.
   * @returns {Promise<CountSequence>} A promise that resolves to the count sequence.
   */
  getSequence: async (): Promise<CountSequence> => {
    const response = await api.get<ApiResponse<CountSequence>>('/external/counter');
    return response.data;
  },
};
