import { PAGES_INFO } from '@/constants/seo-info';

type MetadataImage = string | URL;

interface SharedMetadataArgs {
	slug: string;
	fallbackImages?: MetadataImage[];
}

export function getSharedMetadata({
	slug,
	fallbackImages = [],
}: SharedMetadataArgs) {
	const info = PAGES_INFO[slug];

	if (!info) {
		return {
			title: 'Página no encontrada',
		};
	}

	return {
		title: info.title,
		description: info.description ?? info.title,
		openGraph: {
			title: info.title,
			description: info.description ?? info.title,
			images: info.image ? [info.image, ...fallbackImages] : fallbackImages,
		},
		twitter: {
			card: 'summary_large_image',
			title: info.title,
			description: info.description ?? info.title,
			images: info.image ? [info.image] : [],
		},
	};
}
