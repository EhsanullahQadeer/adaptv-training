import Timer from '@/app/assets/icons/Timer';
import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ServiceCardProps {
  category: string;
  title: string;
  image: StaticImageData;
  dotColor?: string; 

}
const SuggestionCard: React.FC<ServiceCardProps> = ({ category, title, image, dotColor }) => {
  return (
    <div className='flex gap-2'>
        <div className='  '>
        <Image src={image} alt={title}  className="rounded-md md:w-[104px] md:h-[79px] object-cover" />
        </div>

        <div>
 <span className="px-[6px] w-fit items-center py-[4px] mb-1 bg-[#E8E8E8] flex gap-1 rounded-md">
      <span className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: dotColor }}></span>
      <span className="text-xs font-medium">{category}</span>
      </span>
      <span className="font-semibold text-[16px] font-fonetika md:w-36  overflow-hidden line-clamp-1">
          {title}
        </span>      <span className="flex items-center gap-1 ">
        <Timer/>
        <span className="text-[14px] font-semibold">45 min</span>
      </span>
        </div>
      
    </div>
  )
}

export default SuggestionCard
