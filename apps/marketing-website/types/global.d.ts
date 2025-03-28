import React from 'react';

declare global {
	namespace JSX {
		type Element = React.ReactNode;
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

	export interface BlogCategory {
		categoryName: string;
		id: string;
		createdAt: string;
		updatedAt: string;
	}
}
