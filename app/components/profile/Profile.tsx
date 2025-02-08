import React, { useState } from "react";
import ProfileItem from "./ProfileItem";
import Image from "next/image";

const Profile = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="-translate-y-20" id="profile-section">
        {" "}
      </div>
      <div className="flex flex-col gap-4 justify-center items-center bg-white py-8">
        <Image
          className="h-60 w-60 rounded-3xl"
          src="/assets/profile1.webp"
          alt="Dra. Manuela Villanueva"
          width={500}
          height={500}
        />
        <span className="text-3xl font-semibold">Acerca de mí</span>
        <span className="text-center px-8 lg:px-52 xl:px-96">
          Nací, crecí y me formé en Buenos Aires. Me recibí de médica en la UBA
          y completé mi especialización en neurología en el Hospital Ramos
          Mejía, un reconocido hospital público de la ciudad. Posteriormente,
          enfoqué mi carrera en la epilepsia, trabajando en el Hospital El
          Cruce, en el servicio de Cirugía de la Epilepsia. Durante esta etapa,
          comencé a investigar la conectividad cerebral a través de estudios de
          Resonancia Magnética, temática que actualmente desarrollo en mi
          doctorado. Además, he complementado mi formación con una maestría en
          neurociencias.
        </span>

        {expanded ? (
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 items-start justify-items-start gap-2 xl:px-96 p-4">
              <ProfileItem detail="Medicina: Universidad de Buenos Aires (2016)" />
              <ProfileItem detail="Neurología: Hospital Ramos Mejía (2021)" />
              <ProfileItem detail="Epilepsia: Hospital El Cruce (2023)" />
              <ProfileItem detail="Maestría Neurociencias: Universidad Arturo Jaureche (2024)" />
              <ProfileItem detail="Doctorado en Neuroimagen funcional: Universidad de Buenos Aires (actualidad)" />
              <ProfileItem detail="Ensayos Clínicos de medicación" />
              <ProfileItem detail="Cursos de Estadística, Ensayos Clínicos, Epilepsia, Neurofisiología " />
            </div>
          </div>
        ) : (
          <button className="font-semibold" onClick={toggleExpanded}>
            Leer más
          </button>
        )}
        {expanded && (
          <button className="font-semibold" onClick={toggleExpanded}>
            Leer menos
          </button>
        )}
      </div>
    </>
  );
};

export default Profile;
