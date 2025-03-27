import { apiClient } from '../utils/apiClient';
import type { ApiResponse } from '@workspace/api-handler/api';
import type { CoachFormValues } from '@/types/coach';

// API functions
const submitCoachApplication = async (data: CoachFormValues): Promise<ApiResponse<any>> => {
  return apiClient.post('/coach-application', data);
};

// Export all helper functions
export {
  submitCoachApplication,
};
