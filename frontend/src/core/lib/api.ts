import axios from 'axios';

/**
 * @singleton api
 * @summary Centralized Axios instance for making API requests to the backend.
 * @type api-client
 * @category core-library
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can add interceptors for handling auth tokens, errors, etc.
api.interceptors.response.use(
  (response) => response.data, // Return the data property from the response
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  },
);
