import { apiCmsClient } from '../utils/apiClient';
import type { ApiResponse, ApiConfig } from '@workspace/api-handler/api';
import type {
	CoachFormValues,
	CoachLearningResourceCategoriesResponse,
	ExtendedCoachApplicationConfig,
} from '@/types/coach';
import type { ApiErrorResponse } from '@/types/api';
import {
	ClientBlogCategoriesResponse,
	MovementEquipmentResponse,
	MovementTrainingStylesResponse,
	MusclesResponse,
} from '@/types/client';

// Helper functions for API calls with proper typing
const getCoachHomepage = () => apiCmsClient.get('/globals/coach-homepage');
const getCoachFAQs = () => apiCmsClient.get('/globals/coach-faqs-section');
const getClientFAQs = () => apiCmsClient.get('/globals/client-faqs-section');
const getSiteConfiguration = () => apiCmsClient.get('/globals/site-configuration');
const getCoachLearningResourceCategories = () =>
	apiCmsClient.get<CoachLearningResourceCategoriesResponse>('/coach-learning-resource-categories');
const getCoachLearningResourcePosts = () => apiCmsClient.get('/coach-learning-resource-posts');
const getCoachLearningPost = (id: string) => apiCmsClient.get(`/coach-learning-resource-posts/${id}`);
const getMuscles = () => apiCmsClient.get<MusclesResponse>('/muscles');
const getMovementTrainingStyles = () => apiCmsClient.get<MovementTrainingStylesResponse>('/movement-training-styles');
const getMovementEquipment = () => apiCmsClient.get<MovementEquipmentResponse>('/movement-equipment');
const getMovements = () => apiCmsClient.get('/collections/movements');
const getExerciseLibraryHomepage = () => apiCmsClient.get('/globals/movement-library-homepage');
const getClientBlogSubscribers = () => apiCmsClient.get('/collections/client-blog-subscribers');
const getClientBlogCategories = () => apiCmsClient.get<ClientBlogCategoriesResponse>('/client-blog-categories');
const getClientBlogPosts = () => apiCmsClient.get('/client-blog-posts');
const getClientSingleBlogPost = (id: string) => apiCmsClient.get(`/client-blog-posts/${id}`);

const postCoachApplication = async (data: CoachFormValues) =>
	apiCmsClient.post<ApiErrorResponse, false>('/coach-application', data, { extractData: false });

const postClientWaitlist = async (data: any) =>
	apiCmsClient.post<ApiErrorResponse, false>('/collections/client-waitlist', data, { extractData: false });

const getCoachApplicationConfig = () =>
	apiCmsClient.get<ExtendedCoachApplicationConfig>('/globals/coach-application-config');

// Export all helper functions
export {
	getCoachHomepage,
	getCoachFAQs,
	getClientFAQs,
	getSiteConfiguration,
	getCoachLearningResourceCategories,
	getCoachLearningResourcePosts,
	getCoachLearningPost,
	getMuscles,
	getMovementTrainingStyles,
	getMovementEquipment,
	getMovements,
	getExerciseLibraryHomepage,
	getClientBlogSubscribers,
	getClientBlogCategories,
	getClientBlogPosts,
	getClientSingleBlogPost,
	postCoachApplication,
	postClientWaitlist,
	getCoachApplicationConfig,
};

// Re-export types for convenience
export type { CoachFormValues } from '@/types/coach';
