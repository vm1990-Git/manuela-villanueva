"use client";

import React from "react";

interface MenuItemProps {
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
                py-2
                px-2
                xl:py-6
                hover:text-white
                transition
                font-semibold
                cursor-pointer
            "
    >
      {label}
    </div>
  );
};

export default MenuItem;
