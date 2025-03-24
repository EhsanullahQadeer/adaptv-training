import { imagesPaths } from '@/lib/public-assets-paths';
import { Typography } from '@workspace/ui/components';
import { Carousel, CarouselContent, CarouselItem } from '@workspace/ui/components/carousel';
import Image from 'next/image';
import React from 'react';

const { gymBoy } = imagesPaths;

const items = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  name: "Johnny Bell",
  title: "Science-Based Trainer",
  image: gymBoy,
}));

const LearnGrowSlider = () => {
  return (
    <div className="my-8">
      <Carousel >
        <CarouselContent className="-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-4  relative basis-auto w-[280px] h-[470px]">
              <div className="relative w-full rounded-lg h-full">
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt="gym-boy"
                  className="w-full h-full rounded-lg"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-black/70 to-black/10"></div>
                {/* Text Overlay */}
                <div className="absolute bottom-[99px] left-1/2 transform -translate-x-1/2 text-white text-center z-10 w-full">
                  <Typography as="h6" sizeVariant="large" color="text-white">
                    {item.name}
                  </Typography>
                  <Typography color="text-white text-[16px] block">{item.title}</Typography>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LearnGrowSlider;
