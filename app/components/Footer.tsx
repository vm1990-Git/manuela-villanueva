import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="flex flex-col justify-start bottom-0 w-full z-50 pl-3 py-2 text-white text-sm bg-tertiary">
      <div className="flex items-center gap-2 rounded-full">
        <a
          className="flex justify-center items-center"
          href="https://www.linkedin.com/in/manuelamariavillanueva"
          target="_blank"
        >
          <FaLinkedin size={27} />
        </a>
        <a
          className="flex justify-center items-center"
          href="https://www.instagram.com/neurotabu/"
          target="_blank"
        >
          <GrInstagram size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
