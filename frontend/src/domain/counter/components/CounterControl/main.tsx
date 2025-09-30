import { Button } from '@/core/components/Button';
import { CountingState } from '../../hooks/useCounterControl/types';

interface CounterControlProps {
  buttonLabel: string;
  state: CountingState;
  isLoading: boolean;
  onAction: () => void;
}

/**
 * @component CounterControl
 * @summary Provides control buttons for the counter feature.
 * @domain counter
 * @type ui-component
 * @category control
 */
export const CounterControl = ({ buttonLabel, isLoading, onAction }: CounterControlProps) => {
  return (
    <div className="mt-8 flex justify-center">
      <Button 
        size="lg" 
        onClick={onAction}
        disabled={isLoading}
      >
        {isLoading ? 'Processando...' : buttonLabel}
      </Button>
    </div>
  );
};
