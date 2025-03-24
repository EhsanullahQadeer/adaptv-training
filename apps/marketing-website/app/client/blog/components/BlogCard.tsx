import { Typography } from "@workspace/ui/components";
import { ArrowIcon } from "@workspace/ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogProps {
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  excerpt: string;
  link: string;
}

const BlogCard: React.FC<BlogProps> = ({ title, category, categoryColor, image, excerpt, link }) => {
  return (
    <div className="mt-4 w-fit max-w-[343px] sm:max-w-[252px]  flex flex-col border border-light-gray rounded-lg">
      <Image src={image} alt={title} className="rounded-t-lg lg:rounded-l-lg" width={1000} height={1000} />
      <div className="p-[24px] flex justify-between flex-col">
        <div className="flex flex-col w-auto ">
          <span className="px-[6px] py-[3px] text-[10px] rounded-lg w-fit text-white font-bold" style={{ backgroundColor: categoryColor }}>
            {category}
          </span>
          <Typography className="md:my-2 my-1" as={"h6"} sizeVariant="small" color="text-black">
            {title}
          </Typography>
          <Typography color="text-[#515151" className="text-[14px] leading-[18px] line-clamp-2">{excerpt}</Typography>
        </div>
        <div className=" flex gap-1.5 items-center flex-1 mt-4">
          <Link href={link} className="text-[14px] font-semibold">
            Read more
          </Link>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
