import { CountSequence } from './counterTypes';

/**
 * @summary
 * Service for generating counting sequences
 * 
 * @module counterService
 */
export const counterService = {
  /**
   * @summary
   * Generates a sequence of numbers from 1 to 10
   * 
   * @returns {CountSequence} Array of numbers from 1 to 10
   */
  getCountSequence(): CountSequence {
    return {
      numbers: Array.from({ length: 10 }, (_, i) => i + 1)
    };
  }
};
