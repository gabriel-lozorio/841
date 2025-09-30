import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { counterService } from '../../services/counterService';
import { CountingState, CountingStatus, UseCounterControlReturn } from './types';

/**
 * @hook useCounterControl
 * @summary Manages the counting process from 1 to 10 with state management.
 * @domain counter
 * @type domain-hook
 * @category business-logic
 * @returns {UseCounterControlReturn} The state and functions for controlling the counter.
 */
export const useCounterControl = (): UseCounterControlReturn => {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState<CountingStatus>({
    state: CountingState.IDLE,
    currentNumber: null,
    message: null,
    buttonLabel: 'Iniciar',
  });

  const { mutateAsync: controlCounter, isPending: isLoading } = useMutation({
    mutationFn: (action: 'start' | 'restart') => counterService.controlCounter(action),
    onSuccess: (newStatus) => {
      setStatus(newStatus as CountingStatus);
      queryClient.invalidateQueries({ queryKey: ['counter-status'] });
    },
  });

  const startCounting = async () => {
    await controlCounter('start');
  };

  const restartCounting = async () => {
    await controlCounter('restart');
  };

  return {
    status,
    isLoading,
    error: null,
    startCounting,
    restartCounting,
  };
};
