import Image from "next/image";
import about_hero_img from "../assets/images/about-hero-img.png";
import ServiceCard from "./components/ServiceCard";
import Boy from "../assets/images/boy.png";

const services = [
  {
    category: "Strength Training",
    title: "Structuring the Perfect Training Session",
    image: Boy,
  },
  {
    category: "Cardio Fitness",
    title: "Boost Your Endurance with HIIT Workouts",
    image: Boy,
  },
  {
    category: "Yoga & Flexibility",
    title: "Achieve Mind-Body Balance with Yoga",
    image: Boy,
  },
];

export default function Home() {
  return (
    <div className="mt-8 md:mt-[70px] bg-white">
      <div className="mx-4">
        <div className="max-w-[780px] mb-12 m-auto text-black text-center">
          <h1 className="mb-2.5">Coaching Learning Resources</h1>
          <p className="text-[18px] md:text-[24px] font-normal tracking-[-0.18px] md:tracking-[-0.24px] leading-[140%] md:leading-[30px]">
            Master virtual training, grow your fitness business.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto flex gap-6 ">
<div className="w-[240px]"></div>
<div className="flex justify-center  gap-3 flex-wrap">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              category={service.category}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
        </div>
        

      </div>
    </div>
  );
}
