import { useQuery } from '@tanstack/react-query';
import { counterService } from '../../services/counterService';
import { UseCounterReturn } from './types';

/**
 * @hook useCounter
 * @summary Fetches the count sequence from the backend and manages the related server state.
 * @domain counter
 * @type domain-hook
 * @category data
 * @returns {UseCounterReturn} The state and functions for the counter feature.
 */
export const useCounter = (): UseCounterReturn => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['counter'],
    queryFn: counterService.getSequence,
  });

  return {
    sequence: data?.numbers || [],
    isLoading,
    error,
    refetch,
  };
};
