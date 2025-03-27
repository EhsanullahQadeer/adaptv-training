import React from 'react';

declare global {
	namespace JSX {
		type Element = React.ReactNode;
	}

	interface FAQItem {
		question: string;
		answer: string;
		id: string;
	}

	interface FAQsData {
		createdAt: string;
		updatedAt: string;
		globalType: string;
		faq: FAQItem[];
		id: string;
	}




	// Interface for a single training style
	export interface TrainingStyle {
		createdAt: string;
		updatedAt: string;
		trainingStyleName: string;
		id: string;
	}

	// Interface for the paginated response of training styles
	export interface MovementTrainingStylesResponse {
		docs: TrainingStyle[];
		totalDocs: number;
		limit: number;
		totalPages: number;
		page: number;
		pagingCounter: number;
		hasPrevPage: boolean;
		hasNextPage: boolean;
		prevPage: number | null;
		nextPage: number | null;
	}

	export interface AssetGraphic {
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
}