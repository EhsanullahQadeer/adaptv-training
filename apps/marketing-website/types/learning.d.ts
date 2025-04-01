declare module '@/types/learning' {
	interface Category {
		createdAt: string;
		updatedAt: string;
		categoryName: string;
		labelColor: string;
		id: string;
	}

	interface LexicalNode {
		detail: number;
		format: number;
		mode: string;
		style: string;
		text?: string; // Only present in text nodes
		type: string;
		version: number;
		tag?: string; // Only present in heading nodes
		direction?: string;
		indent?: number;
		children?: LexicalNode[];
	}

	interface LearningContentBody {
		root: {
			children: LexicalNode[];
		};
	}

	interface LearningContentImageMedia {
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

	interface Faq {
		question: string;
		answer: string;
		id: string;
	}

	interface CoachPost {
		createdAt: string;
		updatedAt: string;
		title: string;
		category: Category;
		slug: string;
		learningContentBody: any;
		learningContentMediaType: string;
		learningContentImageMedia: LearningContentImageMedia;
		learningTimeInMinutes: number;
		faq: Faq[];
		meta: Record<string, unknown>;
		_status: string;
		id: string;
	}

	interface ICoachLearningResourcePosts {
		docs: CoachPost[];
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
}
