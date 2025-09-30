/**
 * @module counter
 * @summary This module encapsulates all logic related to the counting feature.
 * @domain functional
 * @dependencies @tanstack/react-query, axios
 * @version 1.0.0
 */

// Domain public exports - Hooks
export * from './hooks/useCounter';
export * from './hooks/useCounterControl';

// Domain public exports - Services
export * from './services/counterService';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'counter',
  domain: 'functional',
  version: '1.0.0',
  publicHooks: ['useCounter', 'useCounterControl'],
  publicServices: ['counterService'],
  dependencies: {
    internal: ['@/core/lib/api'],
    external: ['@tanstack/react-query', 'axios'],
  },
} as const;
