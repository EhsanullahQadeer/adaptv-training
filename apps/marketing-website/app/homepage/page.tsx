import { Typography } from '@workspace/ui/components';
import React from 'react';
import { imagesPaths } from '@/lib/public-assets-paths';
import Image from 'next/image';
const { tabImage, collageMobile } = imagesPaths;

const page = () => {
	return (
		<div  
    className="mt-8 flex justify-center items-center  md:mt-[70px] bg-white">
			<div  style={{  backgroundPositionX: "center" , backgroundSize: "contain " }} className="bg-[url(/assets/images/collage-mobile.png)] sm:bg-[url(/assets/images/collage-four.png)] m-auto bg-no-repeat  w-[1300px]">
        
				<div className="md:mb-16 mb-7   max-w-[350px] md:max-w-[700px] m-auto text-black text-center">
					<Typography as={'h1'} className="mb-2.5">
						Build Your Coaching Business
					</Typography>
					<Typography as={'h5'}>Grow your coaching business, offer personalized training. </Typography>
				</div>

				<div className="max-w-[1100px]  mx-auto flex sm:flex-row flex-col gap-5">
        <div className=''>
  <Image src={tabImage} alt="tab-image" width={1070} height={666}/>
</div>
				</div>
			</div>
		</div>
	);
};

export default page;
