"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

interface QuestionaryItemProps {
  question: string;
  answer: string;
  route?: string;
}

const QuestionaryItem: React.FC<QuestionaryItemProps> = ({
  question,
  answer,
  route,
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center transition text-base cursor-pointer">
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
        <div className="sticky flex bg-gray-100 px-4 py-2 rounded-t-none rounded-b-2xl w-[90vw] max-w-[750px] xl:w-[45vw] shadow-inner animate-fade-down animate-once transition animate-duration-300">
          <div className="flex flex-col">
            <span>
              {answer}{" "}
              {route && (
                <span
                  className="font-semibold hover:text-tertiary cursor-pointer"
                  onClick={() => router.push(route)}
                >
                  Más información
                </span>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionaryItem;
