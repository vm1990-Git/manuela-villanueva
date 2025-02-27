"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
  title: string;
  description: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div id="header-section">
      <div className="w-full flex justify-center items-center bg-white mt-20">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center w-full flex-wrap">
            <Image
              className=""
              src="/assets/Imagen3.webp"
              alt="Neuróloga Dra. Manuela Villanueva"
              height={850}
              width={850}
            />
            <div className="flex flex-col p-4 sm:px-12 max-w-[850px] xl:max-w-sm min-w-60 bg-secondary justify-center xl:h-full">
              <span className="font-bold text-xl">{title}</span>
              <span className="font-semi xl:text-lg">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <Header
        title="Dra. Manuela Villanueva"
        description={
          <>
            Soy neuróloga especialista en epilepsia, formada en la UBA y en el
            Hospital Ramos Mejía de Buenos Aires. Actualmente trabajo en{" "}
            <strong>San Martín de los Andes</strong> y{" "}
            <strong>Junín de los Andes</strong>, donde realizo estudios de{" "}
            <strong
              className="cursor-pointer hover:text-tertiary"
              onClick={() => router.push("/servicios/electroencefalograma")}
            >
              electroencefalograma
            </strong>{" "}
            y brindo atención médica integral y personalizada a cada uno de mis
            pacientes. <br />
          </>
        }
      />
    </div>
  );
};

export default Page;
