import ServiceCard from "./components/ServiceCard";
import Boy from "../assets/images/boy.png";

export const services = [
  {
    category: "Strength Training",
    title: "Structuring the Perfect Training Session",
    image: Boy,
    dotColor: "#FF5733", 
  },
  {
    category: "Cardio Fitness",
    title: "Boost Your Endurance with HIIT Workouts",
    image: Boy,
    dotColor: "#3388FF", 
  },
  {
    category: "Yoga & Flexibility",
    title: "Achieve Mind-Body Balance with Yoga",
    image: Boy,
    dotColor: "#28A745", // Example color
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

        <div className="max-w-[1100px] mx-auto flex sm:flex-row flex-col gap-5">
          <div className="sm:w-[240px]"></div>
          <div className="flex sm:justify-left justify-center sm:pl-4 gap-3 flex-wrap">
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
  );
}
