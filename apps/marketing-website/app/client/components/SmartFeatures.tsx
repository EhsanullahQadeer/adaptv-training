"use client";
import { Typography } from "@workspace/ui/components";
import React, { useState } from "react";
import { imagesPaths } from "@/lib/public-assets-paths";
import Image from "next/image";

const { smartfeature1, smartfeature2, smartfeature3} = imagesPaths;

const tabData = [
  {
    id: "1",
    title: "Find vetted 1-1 trainers",
    desc: "Get matched with top fitness professionals who align with your goals and preferences.",
    image: smartfeature1,
  },
  {
    id: "2",
    title: "Attend group classes",
    desc: "Interactive live session controls, and manage real-time exercises.",
    image: smartfeature2,
  },
  {
    id: "3",
    title: "Optimize your training regime",
    desc: "Monitor your training time, and calories burned, and keeping your session schedule organized.",
    image: smartfeature3,
  },
];

const SmartFeatures = () => {
  const [selectedTab, setSelectedTab] = useState("1");

  return (
    <div className="flex mx-4 gap-10 mt-8 flex-row-reverse">
      <div className="md:flex hidden">
        {selectedTab === "1" && <div> <Image src={smartfeature1} className="h-[530px]" width={1400} height={6} alt="Build & launch your coaching services"></Image></div>}
        {selectedTab === "2" && <div> <Image src={smartfeature2} className="h-[530px]" width={1400} height={1000} alt="Build & launch your coaching services"></Image></div>}
        {selectedTab === "3" && <div><Image src={smartfeature3} className="h-[530px]" width={1400} height={1000} alt="Build & launch your coaching services"></Image></div>}
      </div>

      {/* Tabs Section */}
      <div className="flex  flex-col items-baseline">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`w-full cursor-pointer py-5 px-4 border-l-2 transition-all duration-300 ${
              selectedTab === tab.id
                ? "border-orange-red bg-[#FFFFFF29]"
                : "border-[#FFFFFF52]"
            }`}
            onClick={() => setSelectedTab(tab.id)}
          >
            <div className="flex sm:flex-row flex-col items-baseline gap-4">
             <div>
             <span
                className={`rounded-full w-8 h-8 text-white flex items-center justify-center font-semibold ${
                  selectedTab === tab.id
                    ? " bg-orange-red"
                    : " bg-[#FFFFFF33]"
                }`}
              >
                {tab.id}
              </span>
             </div>
              <div className="flex flex-col gap-2">
                <Typography
                  as="h6"
                  fontWeight="font-semibold"
                  sizeVariant="large"
                  color="text-white"
                >
                  {tab.title}
                </Typography>
                <Typography
                  as="p_secondary"
                  sizeVariant="small"
                  color="text-[#FFFFFFB2]"
                >
                  {tab.desc}
                </Typography>
              </div>
            </div>

            {selectedTab === tab.id && (
              <div className="md:hidden flex items-center justify-center  mt-4">
                <Image
                  src={tab.image}
                  className="w-[530px] "
                  width={1400}
                  height={1000}
                  alt="Training feature"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartFeatures;
