import { Typography } from '@workspace/ui/components'
import React from 'react'

const page = () => {
  return (
    <div className="mt-8 md:mt-[70px] bg-white">
    <div className="mx-4">
      <div className=" mb-12 m-auto text-black text-center">
        <Typography as={"h1"} className="mb-2.5">Fitness and Wellness Stories</Typography>
        <Typography as={"h5"} >
        Expert insights, practical tips, and the latest trends to help you stay informed        </Typography>
      </div>

      <div className="max-w-[1100px] mx-auto flex sm:flex-row flex-col gap-5">
       <Typography as={"h4"}>Featured</Typography>
      </div>
    </div>
  </div>
  )
}

export default page
