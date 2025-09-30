import { AxiosError } from 'axios';

export enum CountingState {
  IDLE = 'ocioso',
  STARTING = 'iniciando',
  RUNNING = 'executando',
  FINISHED = 'finalizado'
}

export interface CountingStatus {
  state: CountingState;
  currentNumber: number | null;
  message: string | null;
  buttonLabel: string;
}

export interface UseCounterControlReturn {
  status: CountingStatus;
  isLoading: boolean;
  error: Error | AxiosError | null;
  startCounting: () => Promise<void>;
  restartCounting: () => Promise<void>;
}
