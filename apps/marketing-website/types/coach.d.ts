declare module "@/types/coach" {
	import type { PaginatedResponse } from '@/types/pagination';

	export interface SocialLinks {
		instagram?: string;
		tiktok?: string;
		x?: string;
		linkedin?: string;
		facebook?: string;
		youtube?: string;
	}

	export interface Certification {
		id: string;
		name: string;
		company: string;
	}

	export interface CoachFormValues {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber?: string;
		socialLinks?: SocialLinks;
		biggestStruggle: string;
		whyBecomeCoach: string;
		trainingStyles: string[];
		certification: Certification[];
		interestedInAthleteProgram: boolean;
	}



	export interface CertificationOptions {
		companyName: string;
		companyImage: AssetGraphic;
		id: string;
	}

	export interface CoachApplicationConfig {
		createdAt: string;
		updatedAt: string;
		globalType: string;
		certificationOptions: CertificationOptions[]
		id: string;
	}

	export interface CoachHomepage {
		createdAt: string;
		updatedAt: string;
		globalType: string;
		heroTitle: string;
		heroDescription: string;
		heroImage: {
			url: string;
			thumbnailURL: string | null;
		};
		id: string;
	}

	export interface CoachLearningResourceCategory {
		name: string;
		description: string | null;
		id: string;
		createdAt: string;
		updatedAt: string;
	}

	export interface CoachLearningResourcePost {
		title: string;
		content: string;
		category: CoachLearningResourceCategory;
		id: string;
		createdAt: string;
		updatedAt: string;
		thumbnailImage: {
			url: string;
			thumbnailURL: string | null;
		};
	}

	export interface TrainingStyle {
		id: string;
		name: string;
		description?: string;
	}

	export interface MovementTrainingStylesResponse {
		styles: TrainingStyle[];
	}

	export interface ExtendedCoachApplicationConfig {
		createdAt: string;
		updatedAt: string;
		globalType: string;
		certificationOptions: CertificationOptions[];
		id: string;
	}

	export type CoachLearningResourcePostsResponse = PaginatedResponse<CoachLearningResourcePost>;
}

export { };
