"use client";

import React from "react";
import { FaBrain } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import { PiHeadCircuit } from "react-icons/pi";

import ServiceItem from "./ServiceItem";

interface ServiceSectionProps {}

const ServiceSection: React.FC<ServiceSectionProps> = ({}) => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center text-white py-8 bg-tertiary"
      id="service-section"
    >
      <h2 className="font-bold text-4xl">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center pt-10 gap-4">
        <ServiceItem
          title="Electroencefalograma"
          icon={PiHeadCircuit}
          iconSize={60}
          id="electroencefalograma"
        />
        <ServiceItem
          title="Consulta Neurológica"
          icon={FaBrain}
          iconSize={60}
          id="consulta_neurologica"
        />
        <ServiceItem
          title="Escalas Neurológicas"
          icon={RiHealthBookFill}
          iconSize={60}
          id="escalas_neurologicas"
        />
      </div>
    </div>
  );
};

export default ServiceSection;
