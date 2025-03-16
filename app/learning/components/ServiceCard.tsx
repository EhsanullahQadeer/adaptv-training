import Timer from "@/app/assets/icons/Timer";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ServiceCardProps {
  category: string;
  title: string;
  image: StaticImageData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ category, title, image }) => {
  return (
    <div className="bg-[#F5F5F5] md:w-[260px] rounded-xl p-[14px]">
      <span className="px-[6px] w-fit items-center py-[4px] mb-3 bg-[#E8E8E8] flex gap-1 rounded-md">
        <span className="w-[9px] h-[9px] rounded-full bg-[#9A38A6]"></span>
        <span className="text-xs font-medium">{category}</span>
      </span>
      <span className="font-bold text-[16px] font-fonetika mb-2">{title}</span>
      <span className="flex items-center gap-1 mb-3">
        <Timer/>
        <span className="text-[14px] font-semibold">45 min</span>
      </span>
      <div>
        <Image src={image} alt={title} className="rounded-md" />
      </div>
    </div>
  );
};

export default ServiceCard;
