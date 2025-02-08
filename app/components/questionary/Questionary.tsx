import QuestionaryItem from "./QuestionaryItem";

interface QuestionaryProps {}

const Questionary: React.FC<QuestionaryProps> = ({}) => {
  return (
    <>
      <div className="-translate-y-20" id="questionary-section">
        {" "}
      </div>
      <div className="flex justify-center flex-col gap-4 py-8 z-10 bg-white text-black">
        <span className="text-center font-bold text-4xl">
          Preguntas Frecuentes
        </span>
        <div className="flex justify-center flex-col gap-5 xl:grid xl:grid-cols-2 md:self-center md:items-start p-4">
          <QuestionaryItem
            question="¿Qué debo traer a mi primera consulta?"
            answer="Trae cualquier resumen de historia clínica disponible, estudios previos como laboratorio, tomografías o resonancias magnéticas, y una lista de medicamentos actuales. Si la consulta es por olvidos, se recomienda asistir acompañado."
          />
          <QuestionaryItem
            question="¿Cuánto dura una consulta neurológica?"
            answer="Entre 30 y 60 minutos, dependiendo de la complejidad del caso y si ya nos conocemos previamente."
          />
          <QuestionaryItem
            question="¿Atendes por Obra Social?"
            answer="Por el momento, no. Priorizo la atención de calidad para dedicarle el tiempo necesario."
          />
          <QuestionaryItem
            question="¿Ofrecen consultas en línea?"
            answer="Si, podés estar en cualquier parte del mundo. Utilizamos plataformas como Zoom y Teams.  Utilizo estándares de confidencialidad y calidad en la atención, incluso en el entorno virtual. Tu privacidad y bienestar son nuestra prioridad, sin importar la modalidad de consulta que elijas."
          />
          <QuestionaryItem
            question="¿Cuáles son los síntomas para consultar a una neuróloga?"
            answer="Convulsiones, dolores de cabeza, olvidos, mareos, alteración del sueño, ACV, Parkinson, alteraciones en el neurodesarrollo, trastorno del espectro autista, dolor lumbar o del ciático."
          />
          <QuestionaryItem
            question="¿Haces electroencefalograma preocupacional?"
            answer="Sí. En algunos trabajos o cursos lo solicitan, como por ejemplo
                para el ejército, gendarmería, cursos de pesca o montañismo."
            route="/servicios/electroencefalograma"
          />
        </div>
      </div>
    </>
  );
};

export default Questionary;
