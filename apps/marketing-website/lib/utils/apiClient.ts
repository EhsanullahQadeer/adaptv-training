import { createApiInstance, AxiosInstance } from '@workspace/api-handler/api';

const CMS_API_KEY = '35346526-f1bf-4703-9994-748d14cfb0e7';

export const apiCmsClient: AxiosInstance = createApiInstance({
  baseURL: 'https://adaptvcms.com/api',
  authHeaderFormat: (token) => `users API-Key ${token}`, 
  getAuthToken: async () => CMS_API_KEY, 
});


