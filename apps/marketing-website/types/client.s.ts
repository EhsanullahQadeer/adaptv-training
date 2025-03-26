declare global {
	interface TrainingStyles {
		createdAt: string;
		id: string;
		trainingStyleName: string;
		updatedAt: string;
	}

	interface MuscleGraphic {
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

	interface Muscle {
		createdAt: string;
		updatedAt: string;
		muscleName: string;
		muscleGraphic: MuscleGraphic;
		muscleLabelColor: string;
		id: string;
	}
}

export {};
