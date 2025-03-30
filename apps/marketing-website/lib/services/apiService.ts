import { apiClient } from '../utils/apiClient';
import type { ApiResponse } from '@workspace/api-handler/api';
import type { CoachFormValues } from '@/types/coach';
import { apiRoutes } from '../routes/api-routes';
import { ISubscribeClientBlog } from '@/types/client';
const { CoachApplication, ClientSubscribeBlog } = apiRoutes;

// API functions
const submitCoachApplication = async (data: CoachFormValues): Promise<ApiResponse<any>> => {
	return apiClient.post(CoachApplication, data);
};
const SubmitClientSubscribeBlog = async (data: ISubscribeClientBlog): Promise<ApiResponse<any>> => {
	return apiClient.post(ClientSubscribeBlog, data);
};

// Export all helper functions
export { submitCoachApplication, SubmitClientSubscribeBlog };
