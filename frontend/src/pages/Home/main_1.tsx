import { useEffect } from 'react';
import { useCounterControl } from '@/domain/counter/hooks/useCounterControl';
import { CounterDisplay } from '@/domain/counter/components/CounterDisplay';
import { CounterControl } from '@/domain/counter/components/CounterControl';
import { CountingState } from '@/domain/counter/hooks/useCounterControl/types';

/**
 * @page HomePage
 * @summary The main landing page of the application that displays the counter.
 * @type page-component
 * @category public
 */
export const HomePage = () => {
  const { status, isLoading, startCounting, restartCounting } = useCounterControl();

  // Handle button click based on current state
  const handleAction = () => {
    if (status.state === CountingState.IDLE || status.state === CountingState.FINISHED) {
      startCounting();
    } else {
      restartCounting();
    }
  };

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Contagem de 1 a 10
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Este sistema executa a contagem sequencial automática de 1 até 10, exibindo cada número na interface.
        </p>
      </div>

      <div className="mt-8 w-full max-w-md mx-auto">
        <CounterDisplay 
          currentNumber={status.currentNumber} 
          message={status.message}
          state={status.state}
        />
        
        <CounterControl 
          buttonLabel={status.buttonLabel}
          state={status.state}
          isLoading={isLoading}
          onAction={handleAction}
        />
      </div>
    </section>
  );
};
