import { imagesPaths } from '@/lib/public-assets-paths';
import { Button, Typography } from '@workspace/ui/components';
import { BrainIcon, FlameIcon, RequestVerified, StairsIcon, UploadIcon, ZigzagIcon } from '@workspace/ui/icons';
import Image from 'next/image';
import React from 'react';

const { tracking1, tracking2 } = imagesPaths;

const trainingCards = [
  {
    step: 'STEP 1',
    title: 'Train Smarter with Wearables',
    description: 'Wearable devices like smartwatches help track your heart rate, calorie burn.',
    image: tracking1,
    features: [
      {
        title: 'Real-Time Monitoring',
        description: 'Stay aware of your effort throughout your workout.',
        icon: <ZigzagIcon className='sm:w-8 sm:h-8 w-5 h-6'/>,
      },
      {
        title: 'Data-Driven Progress',
        description: 'Track your fitness improvements over time.',
        icon: <StairsIcon className='sm:w-8 sm:h-8 w-5 h-6' />,
      },
      {
        title: 'Motivation Boost',
        description: 'See your stats in action and stay motivated.',
        icon: <FlameIcon className='sm:w-8 sm:h-8 w-5 h-6' />,
      },
    ],
    button: {
      text: 'Sync Your Smartwatch',
      action: '#',
    },
  },
  {
    step: 'STEP 2',
    title: 'Adaptv Smart Integration',
    description: 'Connect your smartwatch to Adapt and see your heart rate, calorie burn during sessions.',
    image: tracking2,
    features: [
      {
        title: 'Personalized Coaching',
        description: 'Coaches adapt sessions based on real-time stats.',
        icon: <RequestVerified className='sm:w-8 sm:h-8 w-5 h-6' />,
      },
      {
        title: 'Enhanced Engagement',
        description: 'Stay focused with useful performance feedback.',
        icon: <UploadIcon className='sm:w-8 sm:h-8 w-5 h-6' />,
      },
      {
        title: 'Smarter Workouts',
        description: 'Train efficiently with data-driven insights.',
        icon: <BrainIcon className='sm:w-8 sm:h-8 w-5 h-6' />,
      },
    ],
    button: {
      text: 'Join the Waitlist',
      action: '#',
    },
  },
];

const SmartTracking = () => {
  return (
    <div className='flex sm:flex-row flex-col gap-6'>
      {trainingCards.map((card, index) => (
        <div key={index} className='rounded-lg bg-pale-azure  '>
          <Image src={card.image} alt='image tracking' className='rounded-t-lg' width={1000} height={1000} />
          <div className='p-8'>
          <Typography as='h5' sizeVariant='small' color='text-semi-transparent-black'>
            {card.step}
          </Typography>
          <Typography as='h4' color='text-black' className='mt-5 mb-2.5'>
            {card.title}
          </Typography>
          <Typography color='text-slate-gray' className='text-[22px]'>
            {card.description}
          </Typography>
          <div className='my-10 flex flex-col gap-4'>
            {card.features.map((feature, idx) => (
              <div key={idx} className='flex items-center gap-3'>
                <span>{feature.icon}</span>
                <span className='flex items-baseline flex-col gap-1'>
                  <Typography as='h6' fontWeight='font-semibold' color='text-black'>
                    {feature.title}
                  </Typography>
                  <Typography as='caption' className='text-left' color='text-slate-gray'>
                    {feature.description}
                  </Typography>
                </span>
              </div>
            ))}
          </div>
          <Button type='button' size="xl" className='mt-4 '>
            {card.button.text}
          </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmartTracking;
