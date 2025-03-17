import React from "react";
import Card from "./Card";
import custom_workouts_img from "../../assets/images/platform-features/routines/custom-workouts.svg";
import training_plans_img from "../../assets/images/platform-features/routines/training-plans.svg";

const sections = [
  {
    title: "Design custom workouts, your way",
    description:
      "Build structured routines using Adaptv’s Movement Library or add your own custom movements to match your coaching style.",
    buttonText: "Create a Routine",
    image: custom_workouts_img,
    reverse: true,
    textSectionProps: "max-w-[360px]",
    leftSideWrapProps: "self-end",
  },
  {
    title: "Your training plans, ready to go",
    description:
      "Easily access and refine your saved routines with detailed movement breakdowns, timing, difficulty levels, and rest periods.",
    buttonText: "Manage Routines",
    image: training_plans_img,
    reverse: false,
    textSectionProps: "max-w-[365px]",
  },
];

const RoutinesTabContent = () => {
  return (
    <div className="flex flex-col gap-5">
      {sections.map((section, index) => (
        <Card key={index} {...section} />
      ))}
    </div>
  );
};

export default RoutinesTabContent;
