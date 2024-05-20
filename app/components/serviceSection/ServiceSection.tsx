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
      className="flex flex-col justify-center items-center text-white py-8 bg-tertiary"
      id="service-section"
    >
      <h2 className="font-bold text-4xl">Nuestros Servicios</h2>
      <div className="flex flex-wrap justify-center items-center pt-10 gap-4">
        <ServiceItem
          title="Electroencefalograma"
          icon={PiHeadCircuit}
          iconSize={60}
          description="Realización de electroencefalograma. Incluye las activaciones como fotoluminiscencia e hiperventilación para una evaluación completa de la actividad cerebral."
        />
        <ServiceItem
          title="Consulta neurológica"
          icon={FaBrain}
          iconSize={60}
          description="Diagnóstico y tratamiento de enfermedades neurológicas."
        />
        <ServiceItem
          title="Examen físico neurológico"
          icon={Gi3dHammer}
          iconSize={60}
          description="Examen físico neurológico "
        />
        <ServiceItem
          title="Test de TEA / Neurodesarrollo"
          icon={RiHealthBookFill}
          iconSize={60}
          description="Test de TEA / Neurodesarrollo"
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
