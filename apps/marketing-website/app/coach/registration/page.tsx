import React from 'react';
import LeftSide from './components/LeftSide';

const page = () => {
	return (
		<div className="flex flex-1 ">
			<LeftSide />

			<div className="hidden md:flex flex-[42] bg-gray-300 p-4">Right Content</div>
		</div>
	);
};

export default page;
