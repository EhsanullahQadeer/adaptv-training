import { Typography } from '@workspace/ui/components'
import React from 'react'
import ProfileSlider from './ProfileSlider'

const AdaptiveClient = () => {
  return (
                        <div className="my-14 mx-4 ">
                            <Typography as={'h3'} color="text-black" className="flex sm:mb-0 mb-8 justify-center items-center">
                                A Smarter way to train feature highlights
                            </Typography>
                        <div className='flex'>
                            <div className='w-[430px] flex flex-col'>
                            <Typography as={'h2'} className=' leading-[100%]'>Personalize your Profile</Typography>
                            <Typography as={"h6"}  color='text-[#475467]'>Set up your fitness preferences and goals to match with the right trainers.</Typography>
                            </div>
                            <div className="w-0.5 h-10 border-r border-dashed border-b">
                            </div>


                        </div>
                        </div>
      
  )
}

export default AdaptiveClient
