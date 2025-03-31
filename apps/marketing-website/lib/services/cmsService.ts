import { apiCmsClient } from '../utils/apiClient';
import type {
	CoachFormValues,
	CoachLearningResourceCategoriesResponse,
	ExtendedCoachApplicationConfig,
} from '@/types/coach';
import type { ApiErrorResponse } from '@/types/api';
import {
	ClientBlogCategoriesResponse,
	Movement,
	MovementEquipmentResponse,
	MovementsResponse,
	MovementTrainingStylesResponse,
	MusclesResponse,
	ISubscribeClientBlog,
} from '@/types/client';
import { ICoachLearningResourcePosts } from '@/types/learning';

// Helper functions for API calls with proper typing
const getCoachHomepage = () => apiCmsClient.get('/globals/coach-homepage');
const getCoachFAQs = () => apiCmsClient.get('/globals/coach-faqs-section');
const getClientFAQs = () => apiCmsClient.get('/globals/client-faqs-section');
const getSiteConfiguration = () => apiCmsClient.get('/globals/site-configuration');
const getCoachLearningResourceCategories = () =>
	apiCmsClient.get<CoachLearningResourceCategoriesResponse>('/coach-learning-resource-categories');
const getCoachLearningResourcePosts = () => apiCmsClient.get<ICoachLearningResourcePosts>('/coach-learning-resource-posts');
const getCoachLearningPost = (id: string) => apiCmsClient.get(`/coach-learning-resource-posts/${id}`);
const getMuscles = () => apiCmsClient.get<MusclesResponse>('/muscles');
const getMovementTrainingStyles = () => apiCmsClient.get<MovementTrainingStylesResponse>('/movement-training-styles');
const getMovementEquipment = () => apiCmsClient.get<MovementEquipmentResponse>('/movement-equipment');
const getMovements = () => apiCmsClient.get<MovementsResponse>('/movements');
const getSingleMovement = (id: string) => apiCmsClient.get<Movement>(`/movements/${id}`);
const getExerciseLibraryHomepage = () => apiCmsClient.get('/globals/movement-library-homepage');
const getClientBlogSubscribers = () => apiCmsClient.get('/collections/client-blog-subscribers');
const getClientBlogCategories = () => apiCmsClient.get<ClientBlogCategoriesResponse>('/client-blog-categories');
const getClientBlogPosts = () => apiCmsClient.get('/client-blog-posts');
const getClientSingleBlogPost = (id: string) => apiCmsClient.get(`/client-blog-posts/${id}`);
const getFeaturedClientBlog = () => apiCmsClient.get('/globals/client-blog-featured-config');

const postCoachApplication = async (data: CoachFormValues) =>
	apiCmsClient.post<ApiErrorResponse, false>('/coach-application', data, { extractData: false });

const postClientWaitlist = async (data: any) =>
	apiCmsClient.post<ApiErrorResponse, false>('/collections/client-waitlist', data, { extractData: false });

const getCoachApplicationConfig = () =>
	apiCmsClient.get<ExtendedCoachApplicationConfig>('/globals/coach-application-config');

const SubscribeClientBlog = (data: ISubscribeClientBlog) =>
	apiCmsClient.post('/client-blog-subscribers', data, { extractData: false });

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
	getSingleMovement,
	getExerciseLibraryHomepage,
	getClientBlogSubscribers,
	getClientBlogCategories,
	getClientBlogPosts,
	getClientSingleBlogPost,
	getFeaturedClientBlog,
	postCoachApplication,
	postClientWaitlist,
	getCoachApplicationConfig,
	SubscribeClientBlog,
};

// Re-export types for convenience
export type { CoachFormValues } from '@/types/coach';
