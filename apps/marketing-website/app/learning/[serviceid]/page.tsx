import Rightarrow from "@/app/assets/icons/Rightarrow";
import Image from "next/image";
import video from "../../assets/images/video.png";
import OverviewFAQ from "./components/OverviewFAQ";
import SuggestionCard from "./components/SuggestionCard";
import { services } from "../page";
import ServiceCard from "../components/ServiceCard";
import { Typography } from "@workspace/ui/components";

export default function Home() {

  return (
    <div className="mt-8 md:mt-[70px] bg-white">
      <div className="mx-4">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:flex hidden items-center gap-0.5 mb-5">
            <Typography as={"h5"} sizeVariant="small" fontWeight="font-semibold" color="text-[#000000]">
              Learning
            </Typography>
            <Rightarrow />
            <Typography as={"h5"} sizeVariant="small" fontWeight="font-semibold" color="text-gray-500" >
              Effective Communication in Coaching
            </Typography>
          </div>
          <div>
            <Image src={video} alt="video" className="" />
          </div>
          <div className="flex sm:flex-row gap-[20px] mt-7 flex-col">
            <div className="md:w-2/3 w-full">
            <OverviewFAQ/>
            </div>
            <div className="md:w-1/3 ">
            <Typography as={"h5"} className="mt-3">Suggested learning</Typography>
            <div className="sm:flex hidden flex-col mt-5 gap-4 w-full">

            {services.map((service, index) => (
              <SuggestionCard
                key={index}
                category={service.category}
                title={service.title}
                image={service.image}
                dotColor={service.dotColor} 
              />
            ))}
            </div>
            <div className="sm:hidden gap-5 mt-4 flex flex-wrap justify-center items-center">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                category={service.category}
                title={service.title}
                image={service.image}
                dotColor={service.dotColor} // Passing the color prop
              />
            ))}
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
