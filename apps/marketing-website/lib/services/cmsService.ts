import { apiCmsClient } from '../utils/apiClient';
const { get: originalGet, post } = apiCmsClient;

// Wrapper for the `get` function to automatically extract the `data` field
const get = async (url: string) => {
  const response = await originalGet(url);
  return response?.data;
};


// Helper functions for API calls
const getCoachHomepage = () => get('/globals/coach-homepage');
const getCoachFAQs = () => get('/globals/coach-faqs-section');
const getClientFAQs = () => get('/globals/client-faqs-section');
const getSiteConfiguration = () => get('/globals/site-configuration');
const getCoachLearningResourceCategories = () => get('/coach-learning-resource-categories');
const getCoachLearningResourcePosts = () => get('/coach-learning-resource-posts');
const getMuscles = () => get('/muscles');
const getMovementTrainingStyles = () => get('/movement-training-styles');
const getMovementEquipment = () => get('/movement-equipment');
const getMovements = () => get('/collections/movements');
const getExerciseLibraryHomepage = () => get('/globals/movement-library-homepage');
const getClientBlogSubscribers = () => get('/collections/client-blog-subscribers');
const getClientBlogCategories = () => get('/collections/client-blog-categories');
const getClientBlogPosts = () => get('/collections/client-blog-posts');
const postCoachApplication = (data: any) => () => post('/collections/coach-application', data);
const postClientWaitlist = (data: any) => () => post('/collections/client-waitlist', data);
const getCoachApplicationConfig = async (): Promise<CoachApplicationConfig> => get('/globals/coach-application-config');

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
};
