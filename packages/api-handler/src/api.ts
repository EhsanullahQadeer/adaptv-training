import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosHeaders,
  InternalAxiosRequestConfig,
} from 'axios';
import { getRequestKey, getPendingRequest } from './utils/deduplication';
import { standardizeError } from './utils/errorHandler';
import { generateRequestId, logRequest } from './utils/tracing';

export interface ApiConfig extends AxiosRequestConfig {
  getAuthToken?: () => Promise<string | null>;
  authHeaderFormat?: (token: string) => string;
  onRequest?: (request: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  onResponse?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  onError?: (error: any) => any;
  retryCount?: number;
  retryDelay?: number;
}

export const createApiInstance = (config: ApiConfig): AxiosInstance => {
  const instance = axios.create({
    baseURL: config.baseURL || process.env.API_BASE_URL,
    ...config,
  });

  // Request Interceptor
  instance.interceptors.request.use(
    async (request) => {
      const requestId = generateRequestId();
      logRequest(requestId, 'Request started', { url: request.url });

      if (!request.url) {
        throw new Error('Request URL is undefined.');
      }

      if (config.getAuthToken) {
        const token = await config.getAuthToken();
        if (token) {
          const authHeader = config.authHeaderFormat
            ? config.authHeaderFormat(token)
            : `Bearer ${token}`;
          request.headers = new AxiosHeaders({
            ...request.headers?.toJSON(),
            Authorization: authHeader,
          });
        }
      }

      if (config.onRequest) {
        request = await config.onRequest(request as InternalAxiosRequestConfig);
      }

      const requestKey = getRequestKey(request);
      const pendingRequest = getPendingRequest(requestKey);
      if (pendingRequest) {
        return pendingRequest;
      }

      return request as any;
    },
    (error) => config.onError ? config.onError(error) : Promise.reject(error)
  );

  // Response Interceptor
  instance.interceptors.response.use(
    async (response) => {
      if (!response.config || !response.config.url) {
        throw new Error('Response config or URL is undefined.');
      }
      if (config.onResponse) {
        response = await config.onResponse(response);
      }
      return response;
    },
    async (error) => {
      // const standardizedError = standardizeError(error);
      console.error(error.message);

      if (config.onError) {
        return config.onError(error);
      }
      // return Promise.reject(standardizedError);
      return Promise.reject(error);
    }
  );

  return instance;
};

// Generic CRUD methods
export const apiGet = async <T>(instance: AxiosInstance, url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.get<T>(url, config);
  return response.data;
};

export const apiPost = async <T>(instance: AxiosInstance, url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.post<T>(url, data, config);
  return response.data;
};

export const apiPut = async <T>(instance: AxiosInstance, url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.put<T>(url, data, config);
  return response.data;
};

export const apiDelete = async <T>(instance: AxiosInstance, url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.delete<T>(url, config);
  return response.data;
};

// Export Axios types
export type {
  AxiosInstance,
  AxiosResponse,
  AxiosHeaders,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from 'axios';
