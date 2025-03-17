import Rightarrow from "@/app/assets/icons/Rightarrow";
import Image from "next/image";
import video from "../../assets/images/video.png";
import OverviewFAQ from "./components/OverviewFAQ";
import SuggestionCard from "./components/SuggestionCard";
import { services } from "../page";
import ServiceCard from "../components/ServiceCard";

export default function Home() {

  return (
    <div className="mt-8 md:mt-[70px] bg-white">
      <div className="mx-4">
        <div className="max-w-[1100px] mx-auto">
          <div className="sm:flex hidden items-center gap-0.5 mb-5">
            <span className="text-[18px] text-[#000000] !font-semibold">
              Learning
            </span>
            <Rightarrow />
            <span className="text-[18px] text-gray-500 !font-semibold">
              Effective Communication in Coaching
            </span>
          </div>
          <div>
            <Image src={video} alt="video" className="" />
          </div>
          <div className="flex sm:flex-row gap-[20px] mt-7 flex-col">
            <div className="md:w-2/3 w-full">
            <OverviewFAQ/>
            </div>
            <div className="md:w-1/3 ">
            <span className="text-2xl font-medium !my-5">Suggested learning</span>
            <div className="sm:flex hidden flex-col gap-4 mt-4 w-full">

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
            <div className="sm:hidden gap-5 mt-4 flex flex-col justify-center items-center">
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
