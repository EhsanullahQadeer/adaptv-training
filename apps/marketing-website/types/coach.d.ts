declare global {
	interface SocialLinks {
		instagram?: string;
		tiktok?: string;
		x?: string;
		linkedin?: string;
		facebook?: string;
		youtube?: string;
	}

	interface Certification {
		id: string;
		name: string;
		company: string;
	}

	interface CoachFormValues {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber?: string;
		socialLinks?: SocialLinks;
		purpose: string;
		biggestStruggle: string;
		interested: string;
		trainingStyle: string;
		whyBecomeCoach: string;
		trainingStyles: string[];
		certification?: Certification[];
		interestedInAthleteProgram: boolean;
	}

	}
	interface certificationOptions {
		companyName: string;
		companyImage: {
			createdAt: string;
			updatedAt: string;
			alt: string;
			_key: string;
			filename: string;
			mimeType: string;
			filesize: number;
			width: number;
			height: number;
			id: string;
			url: string;
			thumbnailURL: string | null;
		};
	}
	interface CoachApplicationConfig {
		createdAt: string;
		updatedAt: string;
		globalType: string;
		certificationOptions: certificationOptions[]
		certificationOptions: certificationOptions;
		id: string;
	}

	interface ExpertPhoto {
		createdAt: string;
		updatedAt: string;
		alt: string;
		_key: string;
		filename: string;
		mimeType: string;
		filesize: number;
		width: number;
		height: number;
		id: string;
		url: string;
		thumbnailURL: string | null;
	}

	interface Expert {
		expertName: string;
		expertDescription: string;
		expertPhoto: ExpertPhoto;
		id: string;
	}

	interface CoachHomepageExperts {
		createdAt: string;
		updatedAt: string;
		globalType: string;
		experts: Expert[];
	}

	type LearningPostCategory = {
		createdAt: string;
		updatedAt: string;
		categoryName: string;
		id: string;
	};

	type LearningResourcePostsCategories = {
		docs: CategoryDoc[];
		totalDocs: number;
		limit: number;
		totalPages: number;
		page: number;
		pagingCounter: number;
		hasPrevPage: boolean;
		hasNextPage: boolean;
		prevPage: number | null;
		nextPage: number | null;
	};
}

export {};
