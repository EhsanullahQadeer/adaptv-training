import React from "react";
import Card from "./Card";
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
    textSectionProps: "max-w-[450px]",
  },
  {
    title: "Stay oirganized & never miss a session",
    description:
      "Manage your day with ease—access today's sessions and upcoming bookings at a glance.",
    buttonText: "View Schedule",
    image: session_calender_img,
    reverse: true,
    textSectionProps: "max-w-[400px]",
    leftSideWrapProps: "self-end",
  },
  {
    title: "Seamlessly manage all your Sessions",
    description:
      "Whether it’s 1-on-1 coaching or group classes, keep track of all your scheduled and completed sessions in one place.",
    buttonText: "Go to Sessions",
    image: manage_sessions_img,
    reverse: false,
    textSectionProps: "max-w-[430px]",
  },
];

const SessionsTabContent = () => {
  return (
    <div className="flex flex-col gap-5">
      {sections.map((section, index) => (
        <Card key={index} {...section} />
      ))}
    </div>
  );
};

export default SessionsTabContent;
