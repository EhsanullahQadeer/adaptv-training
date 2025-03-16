import Image from "next/image";
import React from "react";
import track_progress_img from "../../assets/images/platform-features/sessions/track-progress.svg";
import session_calender_img from "../../assets/images/platform-features/sessions/session-calender.svg";
import manage_sessions_img from "../../assets/images/platform-features/sessions/manage-sessions.svg";

const sections = [
  {
    title: "Track your progress. elevate your coaching.",
    description:
      "Stay informed with real-time insights—see your coach tier, total sessions, active clients, and average rating, all in one place.",
    buttonText: "View Insights",
    image: track_progress_img,
    reverse: false,
    textSectionWidth: "max-w-[450px]",
  },
  {
    title: "Stay oirganized & never miss a session",
    description:
      "Manage your day with ease—access today's sessions and upcoming bookings at a glance.",
    buttonText: "View Schedule",
    image: session_calender_img,
    reverse: true,
    textSectionWidth: "max-w-[400px]",
    imageProps: "self-end",
  },
  {
    title: "Seamlessly manage all your Sessions",
    description:
      "Whether it’s 1-on-1 coaching or group classes, keep track of all your scheduled and completed sessions in one place.",
    buttonText: "Go to Sessions",
    image: manage_sessions_img,
    reverse: false,
    textSectionWidth: "max-w-[430px]",
  },
];

const SessionsTabContent = () => {
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
            imageProps,
          },
          index
        ) => (
          <div
            key={index}
            className={`bg-pale-azure rounded-3xl w-full p-5 pt-8 flex items-center justify-between md:h-[450px] ${
              reverse ? "md:p-0 md:pr-20" : "md:p-0 md:pl-20"
            }`}
          >
            {/* Left content */}
            <div className={`flex-1 ${imageProps}`}>
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
                  className={`w-full h-full object-cover`}
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
                  className={`w-full h-full object-cover`}
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

export default SessionsTabContent;
