import { InternalAxiosRequestConfig } from 'axios';
import { ApiConfig } from '../types/api';

export const createAuthInterceptor = (config: ApiConfig) => {
	if (!config.getAuthToken) return null;

	return async (request: InternalAxiosRequestConfig) => {
		const token = await config.getAuthToken!();
		if (token) {
			request.headers.Authorization = config.authHeaderFormat ? config.authHeaderFormat(token) : `Bearer ${token}`;
		}
		return request;
	};
};
