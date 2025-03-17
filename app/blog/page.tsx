import React from 'react'

const page = () => {
  return (
    <div className="mt-8 md:mt-[70px] bg-white">
    <div className="mx-4">
      <div className=" mb-12 m-auto text-black text-center">
        <h1 className="mb-2.5">Fitness and Wellness Stories</h1>
        <p className="text-[18px] md:text-[24px] font-normal tracking-[-0.18px] md:tracking-[-0.24px] leading-[140%] md:leading-[30px]">
        Expert insights, practical tips, and the latest trends to help you stay informed        </p>
      </div>

      <div className="max-w-[1100px] mx-auto flex sm:flex-row flex-col gap-5">
       <span className='text-[28px] font-medium   '>Featured</span>
      </div>
    </div>
  </div>
  )
}

export default page
