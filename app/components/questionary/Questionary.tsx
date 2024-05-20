import QuestionaryItem from "./QuestionaryItem";

interface QuestionaryProps {}

const Questionary: React.FC<QuestionaryProps> = ({}) => {
  return (
    <div
      className="flex justify-center flex-col gap-4 py-8 z-10 bg-white text-black"
      id="questionary-section"
    >
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
          question="¿Cómo es la preparación de electroencefalograma?"
          answer="Dormir 4 horas la noche previa, tener el pelo suelto sin productos."
        />
        <QuestionaryItem
          question="¿Qué pasa si necesito cancelar mi cita?"
          answer="Por favor, avísanos con al menos 24 horas de anticipación si necesitas cancelar o reprogramar tu cita para darle la posibilidad del turno a otros pacientes."
        />
        <QuestionaryItem
          question="¿Qué es un electroencefalograma?"
          answer="Es un estudio para medir la actividad eléctrica del cerebro. Se colocan electrodos en el cuero cabelludo de la cabeza. Los electrodos son únicamente de registro, no liberan ninguna energía. "
        />
        <QuestionaryItem
          question="¿Cuánto dura un electroencefalograma?"
          answer="La duración del estudio depende del tipo de estudio, es aproximadamente 40 minutos."
        />
        <QuestionaryItem
          question="¿Haces electroencefalograma preocupacional?"
          answer="Si. En algunos trabajos o cursos lo solicitan como por ejemplo para el ejército, gendarmería, cursos de pesca o montañismo."
        />
        <QuestionaryItem
          question="¿Tengo que dejar de tomar la medicación para el electroencefalograma?"
          answer="No, tenés que tomar la medicación como siempre."
        />
        <QuestionaryItem
          question="¿Cuáles son los síntomas que podrían indicar la necesidad de una consulta neurológica?"
          answer="Convulsiones, dolores de cabeza, olvidos, mareos, alteración del sueño, ACV, Parkinson, alteraciones en el neurodesarrollo, trastorno del espectro autista, dolor lumbar o del ciático."
        />
      </div>
    </div>
  );
};

export default Questionary;
