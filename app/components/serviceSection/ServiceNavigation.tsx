"use client";

import useScrollTo from "@/app/hooks/useScrollTo";
import React from "react";

interface ServiceNavigationProps {
  sections: { label: string; target: string }[];
}

const ServiceNavigation: React.FC<ServiceNavigationProps> = ({ sections }) => {
  const scrollTo = useScrollTo();

  return (
    <div className="flex flex-col justify-start items-center text-center p-2 py-4 gap-2 shadow-md xl:bg-secondary w-full xl:w-96">
      <div className="flex flex-col w-full lg:w-auto xl:bg-secondary gap-3 xl:fixed">
        {sections.map((section, index) => (
          <span
            key={index}
            className={`text-s font-semibold hover:text-tertiary cursor-pointer ${
              index === 0 ? "font-bold text-2xl" : "text-gray-600"
            }`}
            onClick={() => scrollTo(section.target)}
          >
            {section.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceNavigation;
