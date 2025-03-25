import { apiCmsClient } from '../utils/apiClient';
const { get, post } = apiCmsClient;

export const fetchCoachHomepage = async () => {
  return (await getCoachHomepage()).data;
};

export const fetchCoachFAQs = async () => {
  return (await getCoachFAQs()).data;
};

export const fetchClientFAQs = async () => {
  return (await getClientFAQs()).data;
};

export const fetchSiteConfiguration = async () => {
  return (await getSiteConfiguration()).data;
};

export const fetchCoachLearningResources = async () => {
  const categories = await getCoachLearningResourceCategories();
  const posts = await getCoachLearningResourcePosts();
  return { categories: categories.data, posts: posts.data };
};

export const fetchMovements = async () => {
  const muscles = await getMuscles();
  const trainingStyles = await getMovementTrainingStyles();
  const equipment = await getMovementEquipment();
  const movements = await getMovements();
  return {
    muscles: muscles.data,
    trainingStyles: trainingStyles.data,
    equipment: equipment.data,
    movements: movements.data,
  };
};

export const fetchExerciseLibraryHomepage = async () => {
  return (await getExerciseLibraryHomepage()).data;
};

export const fetchClientBlog = async () => {
  const subscribers = await getClientBlogSubscribers();
  const categories = await getClientBlogCategories();
  const posts = await getClientBlogPosts();
  return {
    subscribers: subscribers.data,
    categories: categories.data,
    posts: posts.data,
  };
};

export const submitCoachApplication = async (data: any) => {
  return (await postCoachApplication(data)).data;
};

export const submitClientWaitlist = async (data: any) => {
  return (await postClientWaitlist(data)).data;
};

// Helper functions for API calls
const getCoachHomepage = () => get('/globals/coach-homepage');
const getCoachFAQs = () => get('/globals/coach-faqs-section');
const getClientFAQs = () => get('/globals/client-faqs-section');
const getSiteConfiguration = () => get('/globals/site-configuration');
const getCoachLearningResourceCategories = () => get('/coach-learning-resource-categories');
const getCoachLearningResourcePosts = () => get('/coach-learning-resource-posts');
const getMuscles = () => get('/collections/muscles');
const getMovementTrainingStyles = () => get('/collections/movement-training-styles');
const getMovementEquipment = () => get('/collections/movement-equipment');
const getMovements = () => get('/collections/movements');
const getExerciseLibraryHomepage = () => get('/globals/movement-library-homepage');
const getClientBlogSubscribers = () => get('/collections/client-blog-subscribers');
const getClientBlogCategories = () => get('/collections/client-blog-categories');
const getClientBlogPosts = () => get('/collections/client-blog-posts');
const postCoachApplication = (data: any) => post('/collections/coach-application', data);
const postClientWaitlist = (data: any) => post('/collections/client-waitlist', data);
