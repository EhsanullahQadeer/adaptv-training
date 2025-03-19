import React from "react";
import Card from "./Card";
import { services } from "@/lib/public-assets-paths";

const { customizeServices, manageServices } = services;

const sections = [
  {
    title: "Customize your coaching services. expand your reach.",
    description:
      "Offer 1-on-1 coaching for tailored progress or group classes to energize and motivate multiple clients.",
    buttonText: "Create a Service",
    image: customizeServices,
    reverse: true,
    textSectionProps: "max-w-[420px]",
		leftSideWrapProps: 'lg:ml-10 md:ml-6 sm:ml-5 my-5 max-sm:mx-5 max-w-[303px] sm:max-w-[456px] max-sm:order-2',
		rightSideWrapProps: 'lg:mr-20 md:mr-10 sm:mr-5 max-sm:mx-5 max-sm:mt-8 flex sm:justify-end max-sm:order-1 sm:max-md:my-5',
  },
  {
    title: "Manage & optimize your services",
    description:
      "Easily edit and update your coaching services—adjust pricing, difficulty, duration, and training type to match your expertise.",
    buttonText: "Create a Service",
    image: manageServices,
    reverse: false,
    textSectionProps: "max-w-[380px]",
		leftSideWrapProps: 'lg:ml-20 md:ml-10 sm:ml-5 max-sm:mx-5 max-sm:mt-8',
    rightSideWrapProps: 'my-5 max-sm:self-end max-sm:ml-5 max-sm:max-w-[323px]',
  },
];

const ServicesTabContent = () => {
  return (
    <div className="flex flex-col gap-5">
      {sections.map((section, index) => (
        <Card key={index} {...section} />
      ))}
    </div>
  );
};

export default ServicesTabContent;
