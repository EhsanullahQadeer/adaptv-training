import React from "react";
import platform_tools_img from "../assets/images/platform-tools-img.svg";
import Image from "next/image";
import PlatfomFeatures from "./components/PlatfomFeatures";

export default function Page() {
  return (
    <>
      <div className="bg-snow-white pt-8 md:pt-[70px] px-4">
        <div className="max-w-[700px] m-auto text-black text-center">
          <h1 className="mb-2.5">Powerful Tools for Coaches</h1>
          <p className="heading-desc">
            Manage clients, schedule sessions, and grow with ease.
          </p>

          <div className="mt-5">
            <button>Become a Coach</button> {/* remaining button */}
          </div>
        </div>

        <div className="max-sm:pt-8 pb-7 sm:pb-12 max-w-[1100px] max-h-[420px] mx-auto">
          <Image
            className="w-full h-full object-cover"
            src={platform_tools_img}
            alt="platform_tools_img"
          />
        </div>
      </div>

      <div className="bg-white px-4">
        <div className="max-w-[1100px] mx-auto">
          <PlatfomFeatures />
        </div>
      </div>
    </>
  );
}
