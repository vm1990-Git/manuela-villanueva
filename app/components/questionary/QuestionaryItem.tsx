"use client";

import { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

interface QuestionaryItemProps {
  question: string;
  answer: string;
}

const QuestionaryItem: React.FC<QuestionaryItemProps> = ({
  question,
  answer,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col justify-center items-center transition text-base">
      <div
        className={`flex w-[90vw] max-w-[750px] xl:w-[45vw] items-center p-2 px-4 justify-between bg-gray-100 py-1 shadow-md ${
          !open ? "rounded-2xl" : "rounded-t-2xl"
        }`}
        onClick={toggleOpen}
      >
        <span className="font-semibold">{question}</span>
        <div className="text-gray-400">
          {open ? (
            <IoIosArrowDropupCircle size={22} />
          ) : (
            <IoIosArrowDropdownCircle size={22} />
          )}
        </div>
      </div>
      {open && (
        <div className="sticky flex bg-gray-100 px-4 py-2 rounded-t-none rounded-b-2xl -z-10 w-[90vw] max-w-[750px] xl:w-[45vw] animate-fade-down animate-once transition animate-duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export default QuestionaryItem;
