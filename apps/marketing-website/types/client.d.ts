declare global {
	interface TrainingStyles {
		createdAt: string;
		id: string;
		trainingStyleName: string;
		updatedAt: string;
	}

	interface AssetGraphic {
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
		muscleGraphic: AssetGraphic;
		muscleLabelColor: string;
		id: string;
	}

	type MovementEquipment = {
		createdAt: string;
		updatedAt: string;
		equipmentName: string;
		equipmentGraphic: AssetGraphic;
		id: string;
	};
}

export {};
