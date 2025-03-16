"use client";
import { useState } from "react";
import PlusCircularIcon from "../assets/icons/PlusCircularIcon";
import MinusCircularIcon from "../assets/icons/MinusCircularIcon";

interface Props {
  faq: { question: string; answer: string };
}

const FAQItem = (props: Props) => {
  const { faq } = props;
  const { question, answer } = faq;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="p-4 md:p-6 rounded-[14px] bg-pale-azure cursor-pointer"
    >
      <div className="flex justify-between items-center gap-8">
        <h6 className="text-black text-base md:text-[22px] font-medium tracking-[-0.16px] md:tracking-[-0.44px] leading-normal">
          {question}
        </h6>

        <div className="w-6 h-6 relative text-lightLime">
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <MinusCircularIcon />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <PlusCircularIcon />
          </div>
        </div>
      </div>
      <div
        className={`max-w-[544px] text-sm sm:text-base text-slate-gray overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-2.5" : "max-h-0 mt-0"
        }`}
      >
        <p className="text-sm md:text-base font-normal tracking-[-0.16px] leading-[132%]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
