import Image from "next/image";
import CoachingSection from "./components/CoachingSection";
import FAQsSection from "./components/FAQsSection";
import LearnSection from "./components/LearnSection";
import about_hero_img from "../assets/images/about-hero-img.png";

export default function Home() {
  return (
    <div className="mt-8 md:mt-[70px] bg-white">
      <div className="mx-4">
        <div className="max-w-[700px] m-auto text-black text-center">
          <h1 className="mb-2.5">Empowering Coaches. Transforming Fitness.</h1>
          <p className="text-lg md:text-2xl font-normal tracking-[-0.18px] md:tracking-[-0.24px] leading-[24px] md:leading-[30px]">
            We connect fitness professionals and Clients worldwide
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto">
          <div className="mt-[42px] md:mt-[72px]">
            <Image
              className="w-full h-full object-cover"
              src={about_hero_img}
              alt="about_hero_img"
            />
          </div>
          <CoachingSection />
        </div>
      </div>

      <LearnSection />

      <div className="mx-4">
        <div className="mt-[66px] md:mt-[120px] mb-5 max-w-[1100px] mx-auto">
          <FAQsSection />
        </div>
      </div>
    </div>
  );
}
