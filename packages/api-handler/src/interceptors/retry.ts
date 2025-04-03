import axios, { AxiosError } from 'axios';
import { ApiConfig } from '../types/api';
import { ExtendedAxiosRequestConfig } from '../types/axios';
import { logError } from '../utils/logger';

const createRetryInstance = () => axios.create();

export const createRetryInterceptor = (config: ApiConfig) => {
	if (!config.retryCount || config.retryCount <= 0) return null;

	return async (error: AxiosError) => {
		const { config: originalRequest } = error;
		if (!originalRequest || !config.retryCount) {
			logError(error);
			return Promise.reject(error);
		}

		const typedRequest = originalRequest as ExtendedAxiosRequestConfig;
		typedRequest._retry = (typedRequest._retry || 0) + 1;
		if (typedRequest._retry > config.retryCount) {
			logError(error);
			return Promise.reject(error);
		}

		await new Promise((resolve) => setTimeout(resolve, config.retryDelay || 1000));
		return createRetryInstance().request(typedRequest);
	};
};
