import ProfileItem from "@/app/components/profile/ProfileItem";
import ServicesDescription from "@/app/components/serviceSection/ServiceDescription";
import ServiceNavigation from "@/app/components/serviceSection/ServiceNavigation";

const Index = () => {
  const ElectroencefalogramaNav = [
    { label: "Electroencefalograma", target: "electro-description" },
    { label: "Preparación", target: "electro-preparation" },
    { label: "Indicaciones comunes", target: "electro-indications" },
    { label: "Tipos de electroencefalogramas", target: "electro-types" },
    { label: "¿Cómo se realiza el estudio?", target: "electro-study" },
    { label: "¿Cuándo están los resultados?", target: "electro-results" },
    { label: "¿Es seguro?", target: "electro-safety" },
    { label: "Recomendaciones post-estudio", target: "electro-post" },
  ];

  return (
    <div className="flex flex-col xl:flex-row w-full pt-20">
      <ServiceNavigation sections={ElectroencefalogramaNav} />
      <div className="flex flex-col justify-center items-center xl:w-full">
        <div
          className="bg-secondary xl:bg-white w-full"
          id="electro-description"
        >
          <ServicesDescription
            title="Electroencefalograma"
            description="
              Es un estudio que mide la actividad eléctrica del cerebro. Tiene una duración aproximada de 40 minutos y se realiza colocando electrodos en el cuero cabelludo. Estos electrodos son únicamente de registro, es decir, no emiten energía y es completamente indoloro."
            imageSrc={null}
          />
        </div>
        <div className="xl:bg-secondary">
          <div
            className="flex flex-col justify-center items-center xl:w-full"
            id="electro-preparation"
          ></div>
          <ServicesDescription
            title="Preparación"
            description={
              <div className="flex flex-col items-start gap-2">
                <span>
                  <strong>Para resultados Optimos:</strong>
                </span>
                <ProfileItem
                  detail={
                    <>No asistir si tienes fiebre o un cuadro infeccioso.</>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>Cabello:</strong> Asistir con el cabello limpio,
                      seco, suelto y sin productos (como gel o aceites).
                    </>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>Sueño:</strong> Dormir un máximo de 4 horas la
                      noche previa, ya que es necesario llegar con sueño.
                    </>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>Medicación:</strong> Continuar tomando la
                      medicación habitual, incluida la indicada para epilepsia,
                      sin cambios.
                    </>
                  }
                />
              </div>
            }
            imageSrc={"/assets/imagen9.jpeg"}
            imagePosition="left"
          />
        </div>

        <div
          className="flex flex-col justify-center items-center xl:w-full"
          id="electro-indications"
        >
          <ServicesDescription
            title="Indicaciones comunes"
            description={
              <div className="flex flex-col items-start gap-2">
                <ProfileItem detail="Diagnóstico y seguimiento de epilepsia." />
                <ProfileItem detail="Evaluación de trastornos del sueño, como insomnio o apnea." />
                <ProfileItem detail="Caracterización de episodios de pérdida de conciencia." />
                <ProfileItem detail="Diagnóstico de trastornos del neurodesarrollo, como autismo o TDAH." />
              </div>
            }
            imageSrc={"/assets/imagen1.jpeg"}
          />
        </div>
        <div
          className="flex flex-col justify-center items-center xl:w-full bg-tertiary text-white w-full"
          id="electro-types"
        >
          <ServicesDescription
            title="Tipos de electroencefalogramas"
            description={
              <div className="flex flex-col items-start gap-2">
                <ProfileItem
                  detail={
                    <>
                      <strong>EEG estándar:</strong> Realizado en estado de
                      vigilia.
                    </>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>EEG con privación de sueño:</strong> Registra
                      trazados durante el sueño.
                    </>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>EEG con maniobras de activación:</strong> Incluye
                      hiperventilación y fotoestimulación.
                    </>
                  }
                />
                <ProfileItem
                  detail={
                    <>
                      <strong>EEG preocupacional:</strong> Para fines laborales
                      o educativos.
                    </>
                  }
                />
              </div>
            }
            imageSrc={null}
          />
        </div>

        <div
          className="flex flex-col justify-center items-center xl:w-full"
          id="electro-study"
          style={{
            backgroundImage: `url('/assets/imagen13.webp')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <ServicesDescription
            title="¿Cómo se realiza el estudio?"
            description="Durante el procedimiento, se colocan los electrodos en la cabeza del paciente utilizando una pasta conductora. El paciente se recuesta cómodamente y se registra la actividad eléctrica del cerebro. Según el caso, se pueden realizar estímulos, como luces intermitentes o ejercicios de respiración (hiperventilación), para evaluar la actividad cerebral en diferentes situaciones."
            imageSrc={null}
          />
        </div>
        <div
          className="flex flex-col justify-center items-center xl:w-full"
          id="electro-results"
        >
          <div className="bg-secondary">
            <ServicesDescription
              title="¿Cuándo están los resultados?"
              description="Los resultados suelen estar disponibles en pocos días, dependiendo de la complejidad del informe."
              imageSrc={"/assets/imagen3.jpeg"}
              imagePosition="left"
              small
            />
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center w-full bg-tertiary text-white"
          id="electro-safety"
        >
          <ServicesDescription
            title="¿Es seguro?"
            description="Sí, es un procedimiento seguro e indoloro. Los electrodos solo registran la actividad del cerebro."
            imageSrc={null}
            small
          />
        </div>
        <div
          className="flex flex-col justify-center items-center xl:w-full"
          id="electro-post"
        >
          <ServicesDescription
            title="Recomendaciones post-estudio"
            description="Después del electroencefalograma, la persona puede continuar con sus actividades diarias de manera normal."
            imageSrc={null}
            small
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
