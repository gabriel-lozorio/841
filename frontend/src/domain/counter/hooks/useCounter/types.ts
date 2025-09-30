import { AxiosError } from 'axios';

export interface UseCounterReturn {
  sequence: number[];
  isLoading: boolean;
  error: Error | AxiosError | null;
  refetch: () => void;
}
