import { QueryClient } from '@tanstack/react-query';

/**
 * @singleton queryClient
 * @summary Global TanStack Query client configuration.
 * @type query-client
 * @category core-library
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: (failureCount, error: any) => {
        // Don't retry on 4xx client errors
        if (error.response?.status >= 400 && error.response?.status < 500) {
          return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: import.meta.env.PROD, // Only refetch on focus in production
    },
  },
});
