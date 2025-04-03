import { imagesPaths } from '@/lib/public-assets-paths';
import { Button, Input, Typography } from '@workspace/ui/components';
import { SearchIcon } from '@workspace/ui/icons';
import React from 'react';
import { ExerciseLibraryData } from './components/ExerciseLibraryData';
import Search from './list/components/Search';

const page = () => {
	const { libraryHeroBg } = imagesPaths;

	return (
		<>
			<div className="pt-[58px] max-sm:pb-[42px] bg-[linear-gradient(180deg,_#000_67.56%,_#383838_100%)]">
				<div
					className="bg-no-repeat bg-center bg-contain lg:bg-cover"
					style={{ backgroundImage: `url(${libraryHeroBg})` }}
				>
					<div className="mx-4">
						<div className="pt-2.5 sm:pb-20 max-w-[1100px] m-auto text-center text-white">
							<Typography as={'h1'} className="mb-2.5 text-white">
								Master Every Movement.
							</Typography>
							<Typography as={'p'} className="text-white">
								Explore a comprehensive library of exercises across different training styles.
							</Typography>

							<div className="mt-6 w-full max-w-[500px] mx-auto max-sm:hidden">
								<Search
									redirectPath="/client/exercise-library/list"
									className="bg-faint-white text-base tracking-[-0.08px] leading-[20px] h-[66px] pl-5 border-pale-silver shadow-light"
									buttonClassName="bg-ocean-glow hover:bg-ocean-glow/80 tracking-[-0.07px] leading-[18px] font-semibold py-4 !pl-5 !pr-6 flex items-center gap-1.5 h-auto"
									placeholder="Find an exercise..."
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-4 sm:hidden">
					<div className="mt-8 w-full max-w-[500px] mx-auto">
						<Input
							placeholder="Find an excercise.."
							className="bg-faint-white text-base tracking-[-0.08px] leading-[20px] h-[50px] pl-5 border-pale-silver text-white shadow-light"
						/>
					</div>
					<div className="mt-4 w-full max-w-[500px] mx-auto">
						<Button
							type="button"
							className="bg-ocean-glow hover:bg-ocean-glow/80 tracking-[-0.07px] leading-[18px] font-semibold py-4 !pl-5 !pr-6 flex items-center gap-1.5 h-auto w-full"
						>
							<SearchIcon />
							Search
						</Button>
					</div>
				</div>
			</div>

			<div className="mx-4">
				<ExerciseLibraryData />
			</div>
		</>
	);
};

export default page;
