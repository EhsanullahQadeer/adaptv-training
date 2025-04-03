import axios, { AxiosResponse } from 'axios';
import { ApiConfig, ApiMethods } from './types/api';
import { ExtendedAxiosInstance, ExtendedAxiosRequestConfig } from './types/axios';
import { createAuthInterceptor } from './interceptors/auth';
import { createRetryInterceptor } from './interceptors/retry';
import { createLoggingInterceptor } from './interceptors/logging';
import { makeRequest } from './utils/request';

export const createApiInstance = (config: ApiConfig): ExtendedAxiosInstance => {
	// Create base instance
	const instance = axios.create({
		baseURL: config.baseURL || process.env.API_BASE_URL,
		timeout: config.timeout || Number(process.env.API_TIMEOUT) || 30000,
		extractData: config.extractData ?? true,
		...config,
	}) as ExtendedAxiosInstance;

	// Add interceptors
	const loggingInterceptor = createLoggingInterceptor();
	const authInterceptor = createAuthInterceptor(config);
	const retryInterceptor = createRetryInterceptor(config);

	instance.interceptors.request.use(loggingInterceptor);
	if (authInterceptor) {
		instance.interceptors.request.use(authInterceptor);
	}
	if (retryInterceptor) {
		instance.interceptors.response.use((response: AxiosResponse) => response, retryInterceptor);
	}

	// Create API methods
	const methods: ApiMethods = {
		get: <T>(url: string, config?: ExtendedAxiosRequestConfig) =>
			makeRequest<T>(instance, 'get', url, undefined, config),
		post: <T>(url: string, data?: any, config?: ExtendedAxiosRequestConfig) =>
			makeRequest<T>(instance, 'post', url, data, config),
		put: <T>(url: string, data?: any, config?: ExtendedAxiosRequestConfig) =>
			makeRequest<T>(instance, 'put', url, data, config),
		delete: <T>(url: string, config?: ExtendedAxiosRequestConfig) =>
			makeRequest<T>(instance, 'delete', url, undefined, config),
	};

	return Object.assign(instance, methods);
};

export * from './types/api';
export * from './types/axios';
