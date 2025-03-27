import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ApiResponse } from '../types/api';
import { ExtendedAxiosInstance, ExtendedAxiosRequestConfig } from '../types/axios';
import { logError } from './logger';

interface ApiErrorResponse {
  error?: string;
  message?: string;
  [key: string]: any;
}

export const transformResponse = <T>(response: AxiosResponse<T>, extractData?: boolean): T | ApiResponse<T> => {
  if (extractData) {
    return response.data;
  }
  return {
    data: response.data,
    status: response.status,
    headers: response.headers as Record<string, string>,
  };
};

export const makeRequest = async <T>(
  instance: AxiosInstance,
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  data?: any,
  config?: ExtendedAxiosRequestConfig
): Promise<T | ApiResponse<T>> => {
  const requestConfig = {
    ...config,
    method,
    url,
    data,
  };

  try {
    const response = await instance.request<T>(requestConfig);
    const typedInstance = instance as ExtendedAxiosInstance;
    return transformResponse(response, config?.extractData ?? typedInstance.defaults.extractData);
  } catch (error) {
    logError(error);
    const axiosError = error as AxiosError<ApiErrorResponse>;
    if (axiosError.response?.data) {
      throw {
        message: axiosError.response.data.error || axiosError.response.data.message || axiosError.message,
        status: axiosError.response.status,
        data: axiosError.response.data
      };
    }
    throw error;
  }
};
