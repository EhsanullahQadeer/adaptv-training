import { apiCmsClient } from '../utils/apiClient';
import type { ApiResponse, ApiConfig } from '@workspace/api-handler/api';

// API Response types
interface ApiErrorResponse {
  errors?: Record<string, string[]>;
  message?: string;
}

interface CoachFormValues {
  name: string;
  email: string;
  // Add other form fields as needed
}

interface MovementTrainingStylesResponse {
  // Add your movement training styles type here
  styles: Array<{
    id: string;
    name: string;
    description?: string;
  }>;
}

interface CoachApplicationConfig {
  // Add your config type here
  enabled: boolean;
  maxApplications?: number;
}

// Helper functions for API calls with proper typing
const getCoachHomepage = () => apiCmsClient.get('/globals/coach-homepage');
const getCoachFAQs = () => apiCmsClient.get('/globals/coach-faqs-section');
const getClientFAQs = () => apiCmsClient.get('/globals/client-faqs-section');
const getSiteConfiguration = () => apiCmsClient.get('/globals/site-configuration');
const getCoachLearningResourceCategories = () => apiCmsClient.get('/coach-learning-resource-categories');
const getCoachLearningResourcePosts = () => apiCmsClient.get('/coach-learning-resource-posts');
const getMuscles = () => apiCmsClient.get('/muscles');
const getMovementTrainingStyles = () => apiCmsClient.get<MovementTrainingStylesResponse>('/movement-training-styles');
const getMovementEquipment = () => apiCmsClient.get('/movement-equipment');
const getMovements = () => apiCmsClient.get('/collections/movements');
const getExerciseLibraryHomepage = () => apiCmsClient.get('/globals/movement-library-homepage');
const getClientBlogSubscribers = () => apiCmsClient.get('/collections/client-blog-subscribers');
const getClientBlogCategories = () => apiCmsClient.get('/collections/client-blog-categories');
const getClientBlogPosts = () => apiCmsClient.get('/collections/client-blog-posts');
const postCoachApplication = async (data: CoachFormValues): Promise<ApiResponse<ApiErrorResponse>> => {
  const response = await apiCmsClient.post<ApiErrorResponse>('/coach-application', data, { extractData: false } as ApiConfig);
  return {
    data: response.data,
    status: response.status,
    headers: Object.fromEntries(
      Object.entries(response.headers).filter(([_, v]) => v !== undefined)
    ) as Record<string, string>,
  };
};
const postClientWaitlist = async (data: any): Promise<ApiResponse<ApiErrorResponse>> => {
  const response = await apiCmsClient.post<ApiErrorResponse>('/collections/client-waitlist', data, { extractData: false } as ApiConfig);
  return {
    data: response.data,
    status: response.status,
    headers: Object.fromEntries(
      Object.entries(response.headers).filter(([_, v]) => v !== undefined)
    ) as Record<string, string>,
  };
};
const getCoachApplicationConfig = () => apiCmsClient.get<CoachApplicationConfig>('/globals/coach-application-config');

// Export all helper functions
export {
  getCoachHomepage,
  getCoachFAQs,
  getClientFAQs,
  getSiteConfiguration,
  getCoachLearningResourceCategories,
  getCoachLearningResourcePosts,
  getMuscles,
  getMovementTrainingStyles,
  getMovementEquipment,
  getMovements,
  getExerciseLibraryHomepage,
  getClientBlogSubscribers,
  getClientBlogCategories,
  getClientBlogPosts,
  postCoachApplication,
  postClientWaitlist,
  getCoachApplicationConfig,
  // Export types
  type CoachFormValues,
  type ApiErrorResponse,
  type MovementTrainingStylesResponse,
  type CoachApplicationConfig,
};
