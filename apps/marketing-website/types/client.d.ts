declare module '@/types/client' {
	import type { PaginatedResponse } from '@/types/pagination';

	export interface TrainingStyles {
		createdAt: string;
		id: string;
		trainingStyleName: string;
		updatedAt: string;
	}

	export interface Muscle {
		createdAt: string;
		updatedAt: string;
		muscleName: string;
		muscleGraphic: AssetGraphic;
		muscleLabelColor: string;
		id: string;
	}

	export interface MovementEquipment {
		createdAt: string;
		updatedAt: string;
		equipmentName: string;
		equipmentGraphic: AssetGraphic;
		id: string;
	}

	export interface Movement {
		createdAt: string;
		updatedAt: string;
		difficulty: string;
		movementName: string;
		equipment: MovementEquipment;
		faqs: FAQItem[];
		id: string;
		movementMediaType: string;
		movementImageMedia?: AssetGraphic;
		movementVideoThumbnail?: AssetGraphic;
		movementVideoMediaUrl?: string;
		slug: string;
		trainingStyle: TrainingStyles;
		primaryMuscleFocus: Muscle[];
		secondaryMuscleFocus: Muscle[];
		equipment: MovementEquipment;
		progressionMovements?: Movement[];
		suggestedMovements?: Movement[];
		movementDescription: any;
	}

	export type MusclesResponse = PaginatedResponse<Muscle>;
	export type MovementEquipmentResponse = PaginatedResponse<MovementEquipment>;
	export type MovementTrainingStylesResponse = PaginatedResponse<TrainingStyles>;
	export type ClientBlogCategoriesResponse = PaginatedResponse<BlogCategory>;
	export type MovementsResponse = PaginatedResponse<Movement>;
}
