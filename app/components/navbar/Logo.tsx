import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div
      className="flex justify-center items-center gap-1 p-4 cursor-pointer"
      onClick={() => window.location.reload()}
    >
      <Image
        className="w-12"
        src={"/assets/logo2.png"}
        alt="Logo image"
        width={500}
        height={500}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-xl ">Manuela Villanueva</span>
        <span className="text-xs font-semibold">Neuróloga M.N. 777777</span>
      </div>
    </div>
  );
};

export default Logo;
