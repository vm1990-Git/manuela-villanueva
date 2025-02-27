"use client";

import React from "react";
import TwoIconSection from "./TwoIconSection";
import useScrollTo from "@/app/hooks/useScrollTo";
import { IoHome } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";

const TopIconSection = () => {
  const scrollTo = useScrollTo();

  return (
    <TwoIconSection
      iconA={IoHome}
      iconsSize={90}
      titleA="Atención Presencial"
      descriptionA="San Martín de los Andes y Junín de los Andes"
      actionA={() => {
        scrollTo("location-section");
      }}
      iconB={RiComputerLine}
      titleB="Atención Virtual"
      descriptionB="Videollamadas, Zoom & Meet"
      actionB={() => null}
    />
  );
};

export default TopIconSection;
