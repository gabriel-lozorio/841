/**
 * @enum CountingState
 * @description Represents the possible states of the counting process
 */
export enum CountingState {
  IDLE = 'ocioso',
  STARTING = 'iniciando',
  RUNNING = 'executando',
  FINISHED = 'finalizado'
}

/**
 * @interface CountingStatus
 * @description Represents the current status of the counting process
 * 
 * @property {CountingState} state - Current state of the counting process
 * @property {number | null} currentNumber - Current number in the sequence (null if not started)
 * @property {string | null} message - Optional message to display (e.g., 'Iniciando...', 'Contagem finalizada!')
 * @property {string} buttonLabel - Label for the control button ('Iniciar' or 'Reiniciar')
 */
export interface CountingStatus {
  state: CountingState;
  currentNumber: number | null;
  message: string | null;
  buttonLabel: string;
}

/**
 * @type CountingAction
 * @description Represents the possible actions for controlling the counting process
 */
export type CountingAction = 'start' | 'restart';
