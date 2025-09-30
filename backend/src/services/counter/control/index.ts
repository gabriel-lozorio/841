import { CountingAction, CountingState, CountingStatus } from './counterControlTypes';

// In-memory state for the counting process
let countingState: CountingState = CountingState.IDLE;
let currentNumber: number | null = null;
let countingTimer: NodeJS.Timeout | null = null;
let startingTimer: NodeJS.Timeout | null = null;

/**
 * @summary
 * Service for controlling the counting process from 1 to 10
 * 
 * @module counterControlService
 */
export const counterControlService = {
  /**
   * @summary
   * Processes a counting action (start or restart) and returns the updated status
   * 
   * @param {CountingAction} action - The action to perform (start or restart)
   * @returns {CountingStatus} The updated status of the counting process
   */
  processCountingAction(action: CountingAction): CountingStatus {
    // Clear any existing timers to prevent memory leaks
    this.clearTimers();
    
    // Reset state based on action
    countingState = CountingState.STARTING;
    currentNumber = null;
    
    // Schedule the initial message display for 500ms
    startingTimer = setTimeout(() => {
      countingState = CountingState.RUNNING;
      currentNumber = 1;
      
      // Start the counting sequence
      let count = 1;
      countingTimer = setInterval(() => {
        // Increment the counter
        count++;
        
        if (count <= 10) {
          currentNumber = count;
        } else {
          // Counting is complete
          countingState = CountingState.FINISHED;
          this.clearTimers();
        }
      }, 1000);
    }, 500);
    
    // Return the initial state
    return this.getCountingStatus();
  },
  
  /**
   * @summary
   * Gets the current status of the counting process
   * 
   * @returns {CountingStatus} The current status of the counting process
   */
  getCountingStatus(): CountingStatus {
    let message: string | null = null;
    
    // Set appropriate message based on state
    if (countingState === CountingState.STARTING) {
      message = 'Iniciando...';
    } else if (countingState === CountingState.FINISHED) {
      message = 'Contagem finalizada!';
    }
    
    // Determine button label based on state
    const buttonLabel = (
      countingState === CountingState.IDLE || 
      countingState === CountingState.FINISHED
    ) ? 'Iniciar' : 'Reiniciar';
    
    return {
      state: countingState,
      currentNumber,
      message,
      buttonLabel
    };
  },
  
  /**
   * @summary
   * Clears any active timers to prevent memory leaks
   */
  clearTimers(): void {
    if (countingTimer) {
      clearInterval(countingTimer);
      countingTimer = null;
    }
    
    if (startingTimer) {
      clearTimeout(startingTimer);
      startingTimer = null;
    }
  },
  
  /**
   * @summary
   * Resets the counting process to its initial state
   */
  reset(): void {
    this.clearTimers();
    countingState = CountingState.IDLE;
    currentNumber = null;
  }
};
