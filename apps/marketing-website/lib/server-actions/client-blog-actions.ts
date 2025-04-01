'use server';

import { getClientBlogPosts } from '../services/cmsService';

// Server action function
export default async function getClientBlogPostsByServerAction(category?: string) {
	// Fetch data using the CMS service
	try {
		const posts = await getClientBlogPosts(category);
		return posts;
	} catch (error) {
		console.error('Error fetching posts: ', error);
		throw new Error('Failed to fetch posts');
	}
}
