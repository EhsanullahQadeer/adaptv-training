import { createApiInstance, type ApiConfig } from '@workspace/api-handler/api';
import { API_BASE_PATH, CMS_API_BASE_PATH } from '../config/config';

const CMS_API_KEY = '35346526-f1bf-4703-9994-748d14cfb0e7';

// CMS API client with retry and timeout configuration
export const apiCmsClient = createApiInstance({
	baseURL: CMS_API_BASE_PATH,
	authHeaderFormat: (token) => `users API-Key ${token}`,
	getAuthToken: async () => CMS_API_KEY,
	timeout: 30000,
	retryCount: 3,
	retryDelay: 1000,
	extractData: true,
	onError: (error) => {
		if (error.response?.data?.error) {
			console.error('CMS Error:', error.response.data.error);
		}
		return Promise.reject(error);
	},
});

// Regular API client with basic configuration
export const apiClient = createApiInstance({
	baseURL: API_BASE_PATH,
	timeout: 15000,
	retryCount: 2,
	retryDelay: 500,
	extractData: true,
});
