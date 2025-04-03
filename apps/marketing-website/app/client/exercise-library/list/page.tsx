import React from 'react';
import Breadcrumbs from '@/components/Breedcrumbs';
import { pagesRoutes } from '@/lib/routes/pages-routes';
import Search from './components/Search';
import FiltersWrapper from './components/FiltersWrapper';

export type paramsType = Promise<{ searchParams: Promise<Record<string, string | undefined>> }>;

const Page = async ({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string }>
}) => {
	const searchObj = await searchParams;
	const search = searchObj['search'];

	const { clientExerciseLibrary, clientExerciseLibraryList } = pagesRoutes;
	const breadcrumbs = [
		{ label: 'Exercise Library', href: clientExerciseLibrary },
		{ label: 'Result', href: clientExerciseLibraryList },
	];

	return (
		<>
			<div className="pt-8 md:pt-[34px] px-4">
				<div className="mb-[42px] sm:mb-8 max-w-[1100px] mx-auto">
					<Breadcrumbs {...{ items: breadcrumbs }} />
					<Search initialSearchTerm={search || ''} />
				</div>
			</div>

			<div className="bg-white">
				<div className="my-8 px-4">
					<div className="max-w-[1100px] mx-auto overflow-hidden">
						<FiltersWrapper />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
