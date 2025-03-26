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
		id: string;
	}
}

export { };
