import { Button } from '@/core/components/Button';

interface ErrorMessageProps {
  title: string;
  message?: string;
  onRetry?: () => void;
  onBack?: () => void;
}

/**
 * @component ErrorMessage
 * @summary A standardized component for displaying error messages to the user.
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const ErrorMessage = ({ title, message, onRetry, onBack }: ErrorMessageProps) => {
  return (
    <div
      className="flex h-full flex-col items-center justify-center rounded-lg border border-destructive/50 bg-destructive/10 p-8 text-center"
      role="alert"
    >
      <h2 className="text-xl font-semibold text-destructive">{title}</h2>
      {message && <p className="mt-2 text-muted-foreground">{message}</p>}
      <div className="mt-6 flex gap-4">
        {onRetry && <Button onClick={onRetry}>Try Again</Button>}
        {onBack && (
          <Button variant="outline" onClick={onBack}>
            Go Back
          </Button>
        )}
      </div>
    </div>
  );
};
