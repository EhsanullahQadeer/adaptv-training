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
	};
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
		certificationOptions: certificationOptions
		id: string;
	}
}

export { };
