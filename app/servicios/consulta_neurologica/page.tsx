"use client";

import ProfileItem from "@/app/components/profile/ProfileItem";
import ServicesDescription from "@/app/components/serviceSection/ServiceDescription";
import ServiceNavigation from "@/app/components/serviceSection/ServiceNavigation";

const Index = () => {
  const consultasNav = [
    { label: "Consulta Neurológica", target: "consulta-description" },
    { label: "Neuroelementos utilizados", target: "consulta-elementos" },
    { label: "Examen Físico Neurológico", target: "consulta-examen" },
  ];

  return (
    <div className="flex flex-col xl:flex-row w-full pt-20">
      <ServiceNavigation sections={consultasNav} />
      <div className="flex flex-col justify-center items-center xl:w-full">
        <div id="consulta-description"></div>
        <ServicesDescription
          title="Consulta Neurológica"
          description="
              Diseñada para ofrecer una evaluación completa y personalizada
              según las necesidades de cada paciente. Durante la consulta,
              realizo un examen físico neurológico integral y, cuando es
              necesario, aplico escalas especializadas para un análisis
              detallado."
          imageSrc={null}
        />
        <div className="bg-secondary">
          <div
            className="flex flex-col justify-center items-center xl:w-full"
            id="consulta-elementos"
          ></div>
          <ServicesDescription
            title="Neuroelementos utilizados"
            description={
              <div className="flex flex-col items-start gap-2">
                <ProfileItem
                  detail={
                    <>
                      <strong>Martillo de reflejos:</strong> Evalúa reflejos
                      tendinosos.
                    </>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>Diapasón:</strong> Evalúa sensibilidad vibratoria
                      y conducción ósea.
                    </>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>Tabla visual de Snellen:</strong> Mide la agudeza
                      visual.
                    </>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>Linterna clínica:</strong> Examina la respuesta
                      pupilar.
                    </>
                  }
                />
              </div>
            }
            imageSrc={"/assets/Imagen5.webp"}
            imagePosition="left"
          />
        </div>
        <div
          className="flex flex-col justify-center items-center xl:w-full"
          id="consulta-examen"
        >
          <ServicesDescription
            title="Examen Físico Neurológico"
            description={
              <div className="flex flex-col items-start gap-2">
                <ProfileItem detail="Función cognitiva (memoria, lenguaje, ejecución)." />
                <ProfileItem detail="Movimientos oculares y respuesta pupilar." />
                <ProfileItem detail="Fuerza muscular, reflejos y sensibilidad." />
                <ProfileItem detail="Coordinación motora y equilibrio." />
              </div>
            }
            imageSrc="/assets/Imagen3.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
