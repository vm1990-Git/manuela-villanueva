import React from "react";
import { FaBrain, FaCannabis } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import { PiHeadCircuit } from "react-icons/pi";
import { Gi3dHammer } from "react-icons/gi";

import ServiceItem from "./ServiceItem";

interface ServiceSectionProps {}

const ServiceSection: React.FC<ServiceSectionProps> = ({}) => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center text-white py-8 bg-tertiary"
      id="service-section"
    >
      <h2 className="font-bold text-4xl">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center pt-10 gap-4">
        <ServiceItem
          title="Electroencefalograma"
          icon={PiHeadCircuit}
          iconSize={60}
          description="Incluye activaciones (fotoluminiscencia e hiperventilación)."
        />
        <ServiceItem
          title="Consulta neurológica"
          icon={FaBrain}
          iconSize={60}
          description="Diagnóstico y tratamiento de enfermedades neurológicas. Examen físico neurológico."
        />
        <ServiceItem
          title="Test de Neurodesarrollo"
          icon={RiHealthBookFill}
          iconSize={60}
          description="Evaluación de trastorno de espectro-autista, déficit de atención e hiperactividad y Neurodesarrollo."
        />
        <ServiceItem
          title="Cannabis Medicinal"
          icon={FaCannabis}
          iconSize={60}
          description="Acompañamiento terapéutico de cannabis medicinal"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
