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
  },
  {
    title: "Manage & optimize your services",
    description:
      "Easily edit and update your coaching services—adjust pricing, difficulty, duration, and training type to match your expertise.",
    buttonText: "Create a Service",
    image: manageServices,
    reverse: false,
    textSectionProps: "max-w-[380px]",
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
