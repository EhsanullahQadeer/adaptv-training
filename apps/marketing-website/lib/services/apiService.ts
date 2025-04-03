import { apiClient } from '../utils/apiClient';
import type { ApiResponse } from '@workspace/api-handler/api';
import type { CoachFormValues } from '@/types/coach';
import { apiRoutes } from '../routes/api-routes';
import { IClientWaitlist, ISubscribeClientBlog } from '@/types/client';
const { CoachApplication, ClientSubscribeBlog, ClientWaitlist } = apiRoutes;

// API functions
const submitCoachApplication = async (data: CoachFormValues): Promise<ApiResponse<any>> => {
	return apiClient.post(CoachApplication, data);
};
const submitClientSubscribeBlog = async (data: ISubscribeClientBlog): Promise<ApiResponse<any>> => {
	return apiClient.post(ClientSubscribeBlog, data);
};
const submitClientWaitlist = async (data: IClientWaitlist): Promise<ApiResponse<any>> => {
	return apiClient.post(ClientWaitlist, data);
};

// Export all helper functions
export { submitCoachApplication, submitClientSubscribeBlog, submitClientWaitlist };
