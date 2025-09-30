import { api } from '@/core/lib/api';
import { ApiResponse } from '@/core/types';
import { CountSequence } from '../types';
import { CountingStatus } from '../hooks/useCounterControl/types';

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
    return { numbers: response.data.data.numbers || [] };
  },

  /**
   * @method controlCounter
   * @summary Controls the counting process (start or restart).
   * @param {string} action - The action to perform ('start' or 'restart').
   * @returns {Promise<CountingStatus>} A promise that resolves to the updated counting status.
   */
  controlCounter: async (action: 'start' | 'restart'): Promise<CountingStatus> => {
    const response = await api.post<ApiResponse<CountingStatus>>('/external/counter/control', {
      action,
    });
    const data = response.data.data;
    return {
      state: data.state,
      currentNumber: data.currentNumber,
      message: data.message,
      buttonLabel: data.buttonLabel
    };
  },
};
