import React from 'react';
import LearnGrowSlider from './LearnGrowSlider';
import { Typography } from '@workspace/ui/components';

const LearnGrow = () => {
	return (
		<div className="bg-black py-10">
			<div className="max-w-[1100px] mx-auto">
				<div className="w-[430px] mb-20 flex flex-col">
					<Typography as={'h2'} color="text-white" className=" leading-[100%]">
						Learn & Grow as a Coach
					</Typography>
					<Typography as={'h6'} color="text-[#FFFFFFBF]">
                    Master virtual training, scale your coaching business, and unlock AdaptvTraining’s full potential with expert resources.					</Typography>
				</div>
			</div>
			<Typography as={'h3'} className="mx-4 " color="text-white text-center">
				Meet the experts already on Adaptv
			</Typography>
			<div className=" my-8 gap-5">
				<LearnGrowSlider></LearnGrowSlider>
			</div>
		</div>
	);
};
export default LearnGrow;
