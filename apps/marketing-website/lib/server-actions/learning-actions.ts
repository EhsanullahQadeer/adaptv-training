'use server';

import { getCoachLearningResourcePosts } from '../services/cmsService';

// Server action function
export default async function getCoachLearningResourcePostsByServerAction(category?: string) {
  // Fetch data using the CMS service
  try {
    const posts = await getCoachLearningResourcePosts(category);
    return posts;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    throw new Error("Failed to fetch posts");
  }
}
