import { counterControlService } from './index';
import { CountingState } from './counterControlTypes';

describe('Counter Control Service', () => {
  beforeEach(() => {
    // Reset the service state before each test
    counterControlService.reset();
    
    // Mock timers
    jest.useFakeTimers();
  });
  
  afterEach(() => {
    // Restore timers
    jest.useRealTimers();
  });
  
  it('should start in STARTING state when processCountingAction is called', () => {
    const result = counterControlService.processCountingAction('start');
    
    expect(result.state).toBe(CountingState.STARTING);
    expect(result.currentNumber).toBeNull();
    expect(result.message).toBe('Iniciando...');
    expect(result.buttonLabel).toBe('Reiniciar');
  });
  
  it('should transition to RUNNING state after 500ms', () => {
    counterControlService.processCountingAction('start');
    
    // Fast-forward time by 500ms
    jest.advanceTimersByTime(500);
    
    const status = counterControlService.getCountingStatus();
    expect(status.state).toBe(CountingState.RUNNING);
    expect(status.currentNumber).toBe(1);
    expect(status.message).toBeNull();
    expect(status.buttonLabel).toBe('Reiniciar');
  });
  
  it('should increment the counter every second', () => {
    counterControlService.processCountingAction('start');
    
    // Fast-forward time by 500ms to start counting
    jest.advanceTimersByTime(500);
    
    // Check initial number
    expect(counterControlService.getCountingStatus().currentNumber).toBe(1);
    
    // Fast-forward time by 1 second
    jest.advanceTimersByTime(1000);
    expect(counterControlService.getCountingStatus().currentNumber).toBe(2);
    
    // Fast-forward time by another second
    jest.advanceTimersByTime(1000);
    expect(counterControlService.getCountingStatus().currentNumber).toBe(3);
  });
  
  it('should finish counting after reaching 10', () => {
    counterControlService.processCountingAction('start');
    
    // Fast-forward time by 500ms to start counting
    jest.advanceTimersByTime(500);
    
    // Fast-forward time by 9 seconds to reach number 10
    jest.advanceTimersByTime(9000);
    expect(counterControlService.getCountingStatus().currentNumber).toBe(10);
    expect(counterControlService.getCountingStatus().state).toBe(CountingState.RUNNING);
    
    // Fast-forward time by 1 more second to finish
    jest.advanceTimersByTime(1000);
    
    const status = counterControlService.getCountingStatus();
    expect(status.state).toBe(CountingState.FINISHED);
    expect(status.message).toBe('Contagem finalizada!');
    expect(status.buttonLabel).toBe('Iniciar');
  });
  
  it('should restart counting when restart action is called', () => {
    // Start counting
    counterControlService.processCountingAction('start');
    jest.advanceTimersByTime(2500); // Should be at number 3
    
    // Restart counting
    const result = counterControlService.processCountingAction('restart');
    
    expect(result.state).toBe(CountingState.STARTING);
    expect(result.currentNumber).toBeNull();
    expect(result.message).toBe('Iniciando...');
    
    // Fast-forward time by 500ms to start counting again
    jest.advanceTimersByTime(500);
    expect(counterControlService.getCountingStatus().currentNumber).toBe(1);
  });
});
