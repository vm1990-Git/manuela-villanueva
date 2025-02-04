"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

interface Option {
  label: string;
  onClick: () => void;
}

interface MenuItemAccordionProps {
  label: string;
  options: Option[];
}

const MenuItemAccordion: React.FC<MenuItemAccordionProps> = ({
  label,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={toggleAccordion}
        className="
          py-2
          px-2
          xl:py-6
          hover:text-white
          transition
          font-semibold
          cursor-pointer
          flex
          justify-start
          xl:justify-center
          items-center
          text-center
          gap-1
        "
      >
        {label}
        <span
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <FaAngleDown size={18} />
        </span>
      </div>
      <div
        className={`
    xl:absolute
    bg-secondary
    pr-4
    xl:shadow-md
    rounded-b-lg
    font-semibold
    transform
    transition-all
    origin-top
    border-secondary
    xl:translate-y-1
    ${isOpen ? "block scale-y-100 opacity-100" : "hidden scale-y-0 opacity-0"}
  `}
        style={{
          transformOrigin: "top",
        }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(option.onClick)}
            className="
            flex 
            items-center
            py-2
            pl-4
            hover:text-white
            transition
            cursor-pointer
      "
          >
            <FaAngleRight size={16} />
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemAccordion;
