declare global {
	type CoachFormValues = {
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
	};
}

export {};
