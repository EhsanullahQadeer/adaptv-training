import React from "react";
import Card from "./Card";
import connected_clients_img from "../../assets/images/platform-features/messages/connected-clients.svg";
import real_time_conversations_img from "../../assets/images/platform-features/messages/real-time-conversations.svg";

const sections = [
  {
    title: "Stay connected with your clients",
    description:
      "Manage all your conversations in one place—search messages, check online status, and respond instantly.",
    buttonText: "Open Messages",
    image: connected_clients_img,
    reverse: true,
    textSectionProps: "max-w-[380px]",
    leftSideWrapProps: "self-end",
  },
  {
    title: "Real-time conversations",
    description:
      "Chat seamlessly with clients, track conversations, and keep them engaged with your coaching.",
    buttonText: "Send a Message",
    image: real_time_conversations_img,
    reverse: false,
    textSectionProps: "max-w-[380px]",
  },
];

const MessagesTabContent = () => {
  return (
    <div className="flex flex-col gap-5">
      {sections.map((section, index) => (
        <Card key={index} {...section} />
      ))}
    </div>
  );
};

export default MessagesTabContent;
