import React from "react";
import platform_img_1 from "../assets/images/platform-img-1.png";
import platform_img_2 from "../assets/images/platform-img-2.png";
import ellipse_top from "../assets/images/ellipse-top.png";
import ellipse_bottom from "../assets/images/ellipse-bottom.png";
import Image from "next/image";

const AccessToPlatformSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="z-10">
        <Image
          className="w-full h-full object-cover max-h-[118px] relative z-10"
          src={ellipse_bottom}
          alt="ellipse_bottom"
        />
      </div>
      <div className="mx-4 z-10 relative sm:my-16">
        <div className="flex flex-col justify-center items-center max-w-[510px] mx-auto">
          <h2 className="text-center mb-2.5">
            Get early access to our platform
          </h2>
          <p className="heading-desc">
            Build your Client base before launch
          </p>

          <div className="mt-5 md:mt-6">
            <button>Become a coach</button> {/* remaining button */}
          </div>
        </div>
      </div>
      <div className="absolute -left-18 lg:left-0 top-0 z-1 h-full">
        <Image
          className="w-full h-full max-h-[572px] object-cover"
          src={platform_img_1}
          alt="platform_img_1"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/100 2xl:via-white/80 to-transparent z-1"></div>
      </div>

      <div className="absolute -right-18 lg:right-0 top-0 z-1 h-full">
        <Image
          className="w-full h-full max-h-[572px] object-cover"
          src={platform_img_2}
          alt="platform_img_2"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/100 2xl:via-white/80 to-transparent z-1"></div>
      </div>

      <div className="z-10">
        <Image
          className="w-full h-full object-cover max-h-[118px] relative z-10"
          src={ellipse_top}
          alt="ellipse_top"
        />
      </div>
    </div>
  );
};

export default AccessToPlatformSection;
