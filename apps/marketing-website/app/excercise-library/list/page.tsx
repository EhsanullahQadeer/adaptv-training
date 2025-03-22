import { Button, Input, Typography } from '@workspace/ui/components';
import { RightArrow, SearchIcon } from '@workspace/ui/icons';
import React from 'react';
import FiltersList from './components/FiltersList';

const page = () => {
	return (
		<>
			<div className="bg-snow-white pt-8 md:pt-[34px] px-4">
				<div className="mb-[42px] sm:mb-8 max-w-[1100px] mx-auto">
					<div className="flex items-center gap-0.5 mb-6">
						<Typography
							as={'p_secondary'}
							sizeVariant="small"
							fontWeight="font-semibold"
							color="text-black"
							className="tracking-[-0.08px] leading-[24px]"
						>
							Excercise Library
						</Typography>
						<RightArrow height={20} width={20} />
						<Typography
							as={'p_secondary'}
							sizeVariant="small"
							fontWeight="font-semibold"
							color="text-semi-transparent-black"
							className="tracking-[-0.08px] leading-[24px]"
						>
							Result
						</Typography>
					</div>

					<div className="w-full max-sm:hidden">
						<Input
							placeholder="Find an excercise.."
							className="bg-white text-base tracking-[-0.08px] leading-[20px] h-[66px] pl-5 border-light-gray rounded-xl shadow-[0px_24px_32px_0px_rgba(0, 0, 0, 0.04)]"
							rightAdornment={
								<Button
									type="button"
									className="tracking-[-0.07px] leading-[18px] font-semibold py-4 !pl-5 !pr-6 flex items-center gap-1.5 h-auto"
								>
									<SearchIcon />
									Search
								</Button>
							}
						/>
					</div>

					<div className="w-full sm:hidden">
						<Input
							placeholder="Find an excercise.."
							className="bg-white text-base tracking-[-0.08px] leading-[20px] h-[50px] pl-5 border-light-gray rounded-xl shadow-[0px_24px_32px_0px_rgba(0, 0, 0, 0.04)]"
						/>
						<div className="mt-4 w-full">
							<Button
								type="button"
								className="tracking-[-0.07px] leading-[18px] font-semibold py-4 !pl-5 !pr-6 flex items-center gap-1.5 w-full h-auto"
							>
								<SearchIcon />
								Search
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="my-8 px-4">
					<div className="max-w-[1100px] mx-auto overflow-hidden">
						<FiltersList />
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
