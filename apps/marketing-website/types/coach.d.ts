declare global {
	interface CoachFormValues {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber?: string;
		instagram?: string;
		tiktok?: string;
		x?: string;
		linkedin?: string;
		facebook?: string;
		youtube?: string;
		purpose: string;
		biggestStruggle: string;
		interested: string;
		trainingStyle: string;
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
