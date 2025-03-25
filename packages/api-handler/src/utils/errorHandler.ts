import { AxiosError } from 'axios';

export interface StandardizedError {
  code: string;
  message: string;
  category: 'client' | 'server' | 'network' | 'auth';
  metadata?: Record<string, any>;
}

export const standardizeError = (error: AxiosError): StandardizedError => {
  if (error.response) {
    const status = error.response.status;
    if (status === 401) {
      return { code: 'UNAUTHORIZED', message: 'Unauthorized access', category: 'auth' };
    } else if (status >= 400 && status < 500) {
      return { code: 'CLIENT_ERROR', message: 'Client error occurred', category: 'client' };
    } else if (status >= 500) {
      return { code: 'SERVER_ERROR', message: 'Server error occurred', category: 'server' };
    }
  } else if (error.request) {
    return { code: 'NETWORK_ERROR', message: 'Network error occurred', category: 'network' };
  }
  return { code: 'UNKNOWN_ERROR', message: error.message, category: 'client' };
};
