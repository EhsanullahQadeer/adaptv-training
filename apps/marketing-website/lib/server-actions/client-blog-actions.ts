'use server';

import { getClientBlogPosts, getMovementEquipment, getMovements, getMovementTrainingStyles, getMuscles } from '../services/cmsService';

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

export async function getMusclesByServerAction() {
	// Fetch data using the CMS service
	try {
		const muscles = await getMuscles();
		return muscles;
	} catch {
		throw new Error('Failed to fetch muscles');
	}
}
export async function getMovementTrainingStylesByServerAction() {
	// Fetch data using the CMS service
	try {
		const data = await getMovementTrainingStyles();
		return data;
	} catch {
		throw new Error('Failed to fetch movement training styles');
	}
}

export async function getMovementEquipmentByServerAction() {
	// Fetch data using the CMS service
	try {
		const data = await getMovementEquipment();
		return data;
	} catch {
		throw new Error('Failed to fetch movement training styles');
	}
}





