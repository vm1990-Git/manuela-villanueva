import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="flex justify-center items-center gap-1 p-2 py-4 cursor-pointer"
      onClick={() => router.push("/#header-section")}
    >
      <Image
        className="w-12"
        src={"/assets/NuevoLogo5.webp"}
        alt="Logo image"
        width={500}
        height={500}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-lg">Dra. Manuela Villanueva</span>
        <span className="text-xs font-semibold">
          Neuróloga M.P. 8958 - M.N. 161 159
        </span>
      </div>
    </div>
  );
};

export default Logo;
