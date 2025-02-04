"use client";

import ServicesDescription from "@/app/components/serviceSection/ServiceDescription";
import ServiceNavigation from "@/app/components/serviceSection/ServiceNavigation";

const Index = () => {
  const escalasNav = [
    { label: "Escalas Neurológicas", target: "escales-description" },
    { label: "Screening de Autismo", target: "escales-autism" },
    { label: "Evaluación de TDAH", target: "escales-tdah" },
    { label: "Pautas de Neurodesarrollo", target: "escales-guidelines" },
  ];

  return (
    <div className="flex flex-col xl:flex-row w-full pt-20">
      <ServiceNavigation sections={escalasNav} />
      <div className="flex flex-col justify-center items-center xl:w-full">
        <div id="escales-description">
          <ServicesDescription
            title="Escalas Neurológicas"
            description="
              Son herramientas estandarizadas para evaluar funciones neurológicas, severidad de síntomas y su impacto en la vida de las personas."
            imageSrc={null}
          />
        </div>
        <div className="bg-secondary w-full">
          <div
            className="flex flex-col justify-center items-center xl:w-full"
            id="escales-autism"
          >
            <ServicesDescription
              title="Screening de Autismo"
              description="
              Identifica características asociadas al trastorno del espectro autista mediante observación y cuestionarios."
              imageSrc={"/assets/Imagen2.webp"}
              imagePosition="left"
            />
          </div>
        </div>
        <div className="w-full bg-tertiary text-white">
          <div
            className="flex flex-col justify-center items-center xl:w-full"
            id="escales-tdah"
          >
            <ServicesDescription
              title="Evaluación de TDAH"
              description="
              Analiza atención, impulsividad y comportamiento en diferentes contextos."
              imageSrc={null}
            />
          </div>
        </div>
        <div className="w-full">
          <div
            className="flex flex-col justify-center items-center xl:w-full"
            id="escales-guidelines"
          >
            <ServicesDescription
              title="Pautas de Neurodesarrollo"
              description="Detecta alteraciones en hitos motores, cognitivos y sociales."
              imageSrc={"/assets/Imagen4.webp"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
