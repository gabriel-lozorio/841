import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary A page displayed when a route is not found (404).
 * @type page-component
 * @category error-handling
 */
export const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
      <Button asChild>
        <Link to="/">Go to Homepage</Link>
      </Button>
    </div>
  );
};
