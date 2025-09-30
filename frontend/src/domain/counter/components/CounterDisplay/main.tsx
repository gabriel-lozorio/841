import { CountingState } from '../../hooks/useCounterControl/types';

interface CounterDisplayProps {
  currentNumber: number | null;
  message: string | null;
  state: CountingState;
}

/**
 * @component CounterDisplay
 * @summary Displays the current number or message in the counting sequence.
 * @domain counter
 * @type ui-component
 * @category display
 */
export const CounterDisplay = ({ currentNumber, message, state }: CounterDisplayProps) => {
  // Determine what to display based on state and available data
  const displayContent = () => {
    if (message) {
      return message;
    }
    
    if (currentNumber !== null) {
      return currentNumber;
    }
    
    return null;
  };

  const content = displayContent();

  return (
    <div className="flex h-64 w-full items-center justify-center rounded-lg border bg-card p-8 shadow-sm">
      <div 
        className="text-center font-sans text-5xl font-bold text-blue-600"
        aria-live="polite"
      >
        {content !== null ? content : ''}
      </div>
    </div>
  );
};
