import Image from "next/image";
import React from "react";
import imapact_img from "../../assets/images/platform-features/dashboard/impact-img.svg";
import manage_coaching_img from "../../assets/images/platform-features/dashboard/manage-coaching-img.svg";
import training_schedule_img from "../../assets/images/platform-features/dashboard/training-schedule-img.svg";
import revenue_img from "../../assets/images/platform-features/dashboard/revenue-img.svg";
import reach_graph_img from "../../assets/images/platform-features/dashboard/reach-graph-img.svg";

const sections = [
  {
    title: "Track your impact, optimize your growth",
    description:
      "Get a clear snapshot of your coaching success with total active sessions, earnings, and clients coached.",
    buttonText: "View Your Performance",
    image: imapact_img,
    reverse: false,
    textSectionWidth: "max-w-[430px]",
  },
  {
    title: "Manage & promote your coaching services",
    description:
      "Easily track your most popular offerings and recent bookings, whether it's 1-on-1 coaching or group classes.",
    buttonText: "Customize Your Services",
    image: manage_coaching_img,
    reverse: true,
    textSectionWidth: "max-w-[430px]",
    imgSectionWidth: "max-w-[446px]",
    imageSideMargin: "pl-10",
  },
  {
    title: "Stay ahead with a clear training schedule",
    description:
      "View and manage all your upcoming coaching sessions so you’re always prepared for your clients.",
    buttonText: "View Upcoming Sessions",
    image: training_schedule_img,
    reverse: false,
    textSectionWidth: "max-w-[430px]",
  },
  {
    title: "Stay on top of your revenue",
    description:
      "Monitor available funds, pending payouts, and weekly earnings with an easy-to-read chart.",
    buttonText: "Check Your Earnings",
    image: revenue_img,
    reverse: true,
    textSectionWidth: "max-w-[390px]",
  },
  {
    title: "Know your reach, expand your influence",
    description:
      "Analyze profile activity, see where your clients come from, and track engagement to grow your audience.",
    buttonText: "Explore Your Insights",
    image: reach_graph_img,
    reverse: false,
    textSectionWidth: "max-w-[410px]",
  },
];

const DashboardTabContent = () => {
  return (
    <div className="flex flex-col gap-5">
      {sections.map(
        (
          {
            title,
            description,
            buttonText,
            image,
            reverse,
            textSectionWidth,
            imgSectionWidth,
            imageSideMargin,
          },
          index
        ) => (
          <div
            key={index}
            className={`bg-pale-azure rounded-3xl w-full p-5 pt-8 flex items-center justify-between md:h-[450px] ${
              reverse ? "md:pl-0 md:pr-20" : "md:pl-20 md:pr-0"
            } md:${imageSideMargin}`}
          >
            {/* Left content */}
            <div className={`flex-1`}>
              {!reverse && (
                <div className={`${textSectionWidth}`}>
                  <h3>{title}</h3>
                  <p className="mt-2.5 text-slate-gray sub-heading-desc">
                    {description}
                  </p>
                  <div className="mt-8">
                    <button>{buttonText}</button> {/* remaining button */}
                  </div>
                </div>
              )}
              {reverse && (
                <Image
                  className={`w-full h-full object-cover ${
                    imgSectionWidth ? imgSectionWidth : ""
                  }`}
                  src={image}
                  alt={title.replace(/\s+/g, "_").toLowerCase()}
                />
              )}
            </div>

            {/* Right content */}
            <div className={`flex-1`}>
              {reverse && (
                <div className={`${textSectionWidth}`}>
                  <h3>{title}</h3>
                  <p className="mt-2.5 text-slate-gray sub-heading-desc">
                    {description}
                  </p>
                  <div className="mt-8">
                    <button>{buttonText}</button> {/* remaining button */}
                  </div>
                </div>
              )}
              {!reverse && (
                <Image
                  className={`w-full h-full object-cover ${
                    imgSectionWidth ? imgSectionWidth : ""
                  }`}
                  src={image}
                  alt={title.replace(/\s+/g, "_").toLowerCase()}
                />
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DashboardTabContent;
