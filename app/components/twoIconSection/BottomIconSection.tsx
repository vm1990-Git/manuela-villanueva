"use client";

import React from "react";
import TwoIconSection from "./TwoIconSection";
import { IoLogoWhatsapp, IoMdMailOpen } from "react-icons/io";
import useScrollTo from "@/app/hooks/useScrollTo";

const BottomIconSection = () => {
  const scrollTo = useScrollTo();

  const openWhatsapp = () => {
    window.open("https://api.whatsapp.com/send/?phone=5492972539774");
  };
  return (
    <TwoIconSection
      iconsSize={90}
      iconA={IoLogoWhatsapp}
      titleA="Escribinos a Whatsapp"
      descriptionA="+54 9 2972 53-9774"
      actionA={openWhatsapp}
      iconB={IoMdMailOpen}
      titleB="Envíanos un Mail"
      descriptionB="manuelamaria.villanueva@gmail.com"
      actionB={() => {
        scrollTo("contact-section");
      }}
    />
  );
};

export default BottomIconSection;
