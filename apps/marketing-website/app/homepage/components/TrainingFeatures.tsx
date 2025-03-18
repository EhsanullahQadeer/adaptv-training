"use client";
import { Typography } from "@workspace/ui/components";
import React, { useState } from "react";
import { imagesPaths } from "@/lib/public-assets-paths";
import Image from "next/image";

const { train1, train2, train3 } = imagesPaths;

const tabData = [
  {
    id: "1",
    title: "Build & launch your coaching services",
    desc: "Offer live 1-on-1 and group sessions, customized to your expertise.",
    image: train1,
  },
  {
    id: "2",
    title: "Stand out with your custom Profile",
    desc: "Highlight your skills, experience, and coaching style.",
    image: train2,
  },
  {
    id: "3",
    title: "Get paid smoothly & securely",
    desc: "Easily track earnings and withdraw funds hassle-free.",
    image: train3,
  },
];

const TrainingFeatures = () => {
  const [selectedTab, setSelectedTab] = useState("1");

  return (
    <div>
      <div className="sm:flex hidden">
        {selectedTab === "1" && <div> <Image src={train1} width={1400} height={1000} alt="Build & launch your coaching services"></Image></div>}
        {selectedTab === "2" && <div> <Image src={train2} width={1400} height={1000} alt="Build & launch your coaching services"></Image></div>}
        {selectedTab === "3" && <div><Image src={train3} width={1400} height={1000} alt="Build & launch your coaching services"></Image></div>}
      </div>

      {/* Tabs Section */}
      <div className="flex sm:flex-row flex-col items-baseline">
        {tabData.map((tab) => (
          <div
            key={tab.id}
            className={`w-full py-4 px-6 border-t-2 transition-all duration-300 ${
              selectedTab === tab.id
                ? "border-[#5271FF] bg-[#F2F4F8]"
                : "border-[#E7E7E7]"
            }`}
            onClick={() => setSelectedTab(tab.id)}
          >
            <div className="flex sm:flex-row flex-col items-baseline gap-4">
             <div>
             <span
                className={`rounded-full w-8 h-8 flex items-center justify-center font-semibold ${
                  selectedTab === tab.id
                    ? "text-white bg-[#5271FF]"
                    : "text-[#000000] bg-[#E7E7E7]"
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
                  color="text-[#000000]"
                >
                  {tab.title}
                </Typography>
                <Typography
                  as="p_secondary"
                  sizeVariant="small"
                  color="text-[#475467]"
                >
                  {tab.desc}
                </Typography>
              </div>
            </div>

            {selectedTab === tab.id && (
              <div className="sm:hidden mt-4">
                <Image
                  src={tab.image}
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

export default TrainingFeatures;
