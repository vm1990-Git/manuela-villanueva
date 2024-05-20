import Image from "next/image";
import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div
      className="w-full h-screen flex flex-col md:flex-row justify-center items-center bg-white"
      id="header-section"
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:bg-secondary rounded-3xl p-8">
        <div className="flex justify-end ">
          <Image
            className="w-60 sm:w-72 md:w-96 sm:max-w-sm p-4 sm:p-12 pt-20"
            src="/assets/image40t.png"
            alt="Picture of brain"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col md:max-w-sm p-4 sm:p-12 ">
          <span className="font-bold text-2xl">{title}</span>
          <span className="text-lg font-semi">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
