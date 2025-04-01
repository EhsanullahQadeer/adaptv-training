'use server';

import { getClientBlogPosts, getMovements } from '../services/cmsService';

export async function getClientBlogPostsByServerAction(category?: string) {
	// Fetch data using the CMS service
	try {
		const posts = await getClientBlogPosts(category);
		return posts;
	} catch (error) {
		console.error('Error fetching posts: ', error);
		throw new Error('Failed to fetch posts');
	}
}

export async function getMovementsByServerAction(filters?: {
	trainingStyle?: string[];
	primaryMuscleFocus?: string[];
	equipment?: string[];
	difficultyLevel?: string;
}) {
	// Fetch data using the CMS service
	try {
		const movements = await getMovements(filters);
		return movements;
	} catch {
		throw new Error('Failed to fetch posts');
	}
}
