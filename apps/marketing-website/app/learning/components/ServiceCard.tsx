import Timer from "@/app/assets/icons/Timer";
import { Typography } from "@workspace/ui/components";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServiceCardProps {
  category: string;
  title: string;
  image: StaticImageData;
  dotColor?: string; 

}

const ServiceCard: React.FC<ServiceCardProps> = ({ category, title, image, dotColor }) => {
  return (
    <div className="bg-[#F5F5F5] sm:w-[260px] w-[343px] rounded-xl p-[14px]">
      <span className="px-[6px] w-fit items-center py-[4px] mb-3 bg-[#E8E8E8] flex gap-1 rounded-md">
      <span className="w-[9px] h-[9px] rounded-full" style={{ backgroundColor: dotColor }}></span>
      <Typography as={"caption"} fontWeight="font-medium" sizeVariant="small" color="text-[#000000]" className="text-xs font-medium">{category}</Typography>
      </span>
      <Typography as={"caption"} fontWeight="font-bold" sizeVariant="large" color="text-[#000000]" className="!text-left mb-2">{title}</Typography>
      <span className="flex items-center gap-1 mb-3">
        <Timer/>
        <span className="text-[14px] font-semibold">45 min</span>
      </span>
      <div>
        <Image src={image} alt={title}  className="rounded-md w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ServiceCard;
