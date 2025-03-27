import { AxiosError } from 'axios';

interface ErrorLogData {
  type: 'API' | 'NETWORK' | 'GENERAL';
  message: string;
  url?: string;
  method?: string;
  status?: number;
  code?: string;
  errors?: any;
  stack?: string;
  timestamp: string;
  requestId?: string;
  environment?: string;
}

/**
 * Get the current environment, defaulting to 'development' if not set
 */
const getEnvironment = (): string => {
  return process.env.NODE_ENV || 'development';
};

/**
 * Check if we're in development mode
 */
const isDevelopment = (): boolean => {
  return getEnvironment() === 'development';
};

export const formatErrorLog = (error: any): ErrorLogData => {
  const baseLog: Partial<ErrorLogData> = {
    timestamp: new Date().toISOString(),
    message: error.message,
    environment: getEnvironment(),
  };

  if (error.config && error.config.requestId) {
    (baseLog as ErrorLogData).requestId = error.config.requestId;
  }

  if (error instanceof AxiosError) {
    return {
      ...baseLog,
      type: 'API',
      url: error.config?.url,
      method: error.config?.method?.toUpperCase(),
      status: error.response?.status,
      code: error.code,
      errors: error.response?.data?.errors,
    } as ErrorLogData;
  }

  if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
    return {
      ...baseLog,
      type: 'NETWORK',
      code: error.code,
    } as ErrorLogData;
  }

  return {
    ...baseLog,
    type: 'GENERAL',
    stack: isDevelopment() ? error.stack : undefined, // Only include stack trace in development
  } as ErrorLogData;
};

export const logError = (error: any): void => {
  const logData = formatErrorLog(error);
  
  if (isDevelopment()) {
    // In development, show more detailed logs
    console.error('API Error:', JSON.stringify(logData, null, 2));
  } else {
    // In production, log in a format suitable for log aggregation
    console.error(JSON.stringify(logData));
  }
};
