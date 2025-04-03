import { InternalAxiosRequestConfig } from 'axios';
import { generateRequestId, logRequest } from '../utils/tracing';

export const createLoggingInterceptor = () => {
	return async (request: InternalAxiosRequestConfig) => {
		const requestId = generateRequestId();
		logRequest(requestId, 'Request started', { url: request.url });
		return request;
	};
};
