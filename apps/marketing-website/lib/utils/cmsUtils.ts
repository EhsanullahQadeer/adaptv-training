import { CMS_BASE_PATH } from '../config/config';

export const cmsAssetsUrl = (url: string) => {
	const assetPath = CMS_BASE_PATH + url;
	return assetPath;
};
