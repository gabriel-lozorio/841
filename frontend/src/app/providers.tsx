import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';
import { ThemeProvider } from '@/core/contexts/theme';
import { ErrorBoundary } from '@/core/components/ErrorBoundary';
import { ErrorMessage } from '@/core/components/ErrorMessage';

/**
 * @component AppProviders
 * @summary A component that wraps the entire application with necessary context providers.
 * @type utility-component
 * @category core
 */
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary fallback={<ErrorMessage title="An unexpected error occurred" />}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
