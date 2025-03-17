import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  reverse?: boolean;
  textSectionProps?: string;
  imageSectionProps?: string;
  leftSideWrapProps?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  image,
  reverse = false,
  textSectionProps = "",
  imageSectionProps = "",
  leftSideWrapProps = "",
}) => {
  return (
    <div
      className={`bg-pale-azure rounded-3xl w-full p-5 pt-8 flex items-center justify-between md:h-[450px] ${
        reverse ? "md:p-0 md:pr-20" : "md:pl-20 md:p-0"
      }`}
    >
      {/* Left content */}
      <div className={`flex-1 ${leftSideWrapProps}`}>
        {!reverse && (
          <div className={textSectionProps}>
            <h3>{title}</h3>
            <p className="mt-2.5 text-slate-gray sub-heading-desc">
              {description}
            </p>
            <div className="mt-8">
              <button>{buttonText}</button>
            </div>
          </div>
        )}
        {reverse && (
          <Image
            className={`w-full h-full object-cover ${imageSectionProps}`}
            src={image}
            alt={title.replace(/\s+/g, "_").toLowerCase()}
          />
        )}
      </div>

      {/* Right content */}
      <div className="flex-1">
        {reverse && (
          <div className={textSectionProps}>
            <h3>{title}</h3>
            <p className="mt-2.5 text-slate-gray sub-heading-desc">
              {description}
            </p>
            <div className="mt-8">
              <button>{buttonText}</button>
            </div>
          </div>
        )}
        {!reverse && (
          <Image
            className={`w-full h-full object-cover ${imageSectionProps}`}
            src={image}
            alt={title.replace(/\s+/g, "_").toLowerCase()}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
