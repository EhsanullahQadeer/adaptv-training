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
	IClientWaitlist,
} from '@/types/client';
import { ICoachLearningResourcePosts } from '@/types/learning';
import * as qs from 'qs-esm';

// Helper functions for API calls with proper typing
const getCoachHomepage = () => apiCmsClient.get('/globals/coach-homepage');
const getCoachFAQs = () => apiCmsClient.get('/globals/coach-faqs-section');
const getClientFAQs = () => apiCmsClient.get('/globals/client-faqs-section');
const getSiteConfiguration = () => apiCmsClient.get<ISiteConfig>('/globals/site-configuration');
const getCoachLearningResourceCategories = () =>
	apiCmsClient.get<CoachLearningResourceCategoriesResponse>('/coach-learning-resource-categories');

const getCoachLearningResourcePosts = (category?: string) => {
	const query = {
		limit: 100000,
		page: 1,
		where: category ? { category: { equals: category } } : undefined,
	};

	return apiCmsClient.get<ICoachLearningResourcePosts>(
		`/coach-learning-resource-posts?${qs.stringify(query, { encode: false })}`,
	);
};

const getCoachLearningPost = (id: string) => apiCmsClient.get(`/coach-learning-resource-posts/${id}`);
const getMuscles = () => apiCmsClient.get<MusclesResponse>('/muscles');
const getMovementTrainingStyles = () => apiCmsClient.get<MovementTrainingStylesResponse>('/movement-training-styles');
const getMovementEquipment = () => apiCmsClient.get<MovementEquipmentResponse>('/movement-equipment');

const getMovements = (filters?: {
	trainingStyle?: string[];
	primaryMuscleFocus?: string[];
	secondaryMuscleFocus?: string[];
	equipment?: string[];
	difficultyLevel?: string;
}) => {
	const query: any = {
		limit: 100000,
		page: 1,
		where: { or: [] },
	};

	// Collect AND conditions dynamically
	const andConditions: any[] = [];

	if (filters?.trainingStyle && filters.trainingStyle.length > 0) {
		andConditions.push({ trainingStyle: { in: filters.trainingStyle } });
	}
	if (filters?.primaryMuscleFocus && filters.primaryMuscleFocus.length > 0) {
		andConditions.push({ primaryMuscleFocus: { in: filters.primaryMuscleFocus } });
	}
	if (filters?.secondaryMuscleFocus && filters.secondaryMuscleFocus.length > 0) {
		andConditions.push({ secondaryMuscleFocus: { in: filters.secondaryMuscleFocus } });
	}
	if (filters?.equipment && filters.equipment.length > 0) {
		andConditions.push({ equipment: { in: filters.equipment } });
	}
	if (filters?.difficultyLevel) {
		andConditions.push({ difficulty: { equals: filters.difficultyLevel.toLowerCase() } });
	}

	// Wrap AND conditions inside OR
	if (andConditions.length > 0) {
		query.where.or.push({ and: andConditions });
	}

	// Construct query string
	const queryString = qs.stringify(query, { encode: false });

	return apiCmsClient.get<MovementsResponse>(`/movements?${queryString}`);
};

const getSingleMovement = (id: string) => apiCmsClient.get<Movement>(`/movements/${id}`);
const getExerciseLibraryHomepage = () => apiCmsClient.get('/globals/movement-library-homepage');
const getClientBlogSubscribers = () => apiCmsClient.get('/collections/client-blog-subscribers');
const getClientBlogCategories = () => apiCmsClient.get<ClientBlogCategoriesResponse>('/client-blog-categories');

const getClientBlogPosts = (category?: string) => {
	const query = {
		limit: 100000,
		page: 1,
		where: category ? { category: { equals: category } } : undefined,
	};

	return apiCmsClient.get(`/client-blog-posts?${qs.stringify(query, { encode: false })}`);
};

const getClientSingleBlogPost = (id: string) => apiCmsClient.get(`/client-blog-posts/${id}`);
const getFeaturedClientBlog = () => apiCmsClient.get('/globals/client-blog-featured-config');

const postCoachApplication = async (data: CoachFormValues) =>
	apiCmsClient.post<ApiErrorResponse, false>('/coach-application', data, { extractData: false });

const postClientWaitlist = async (data: IClientWaitlist) =>
	apiCmsClient.post<ApiErrorResponse, false>('/client-waitlist', data, { extractData: false });

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
