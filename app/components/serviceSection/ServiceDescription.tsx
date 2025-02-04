import Image from "next/image";

interface ServiceDescriptionProps {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  imageSrc: string | null;
  imagePosition?: "left" | "right";
  small?: boolean;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  description,
  imageSrc,
  imagePosition = "right",
  small = false,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center md:flex-row ${
        imageSrc && imagePosition === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex flex-1 justify-center items-center max-w-[600px] w-full h-full ${
          imageSrc && imagePosition === "right"
            ? "md:justify-end"
            : "md:justify-start"
        }`}
      >
        <div
          className={`flex flex-col justify-center items-center ${
            imageSrc ? "md:w-[600px]" : "w-full"
          } h-96 gap-3 md:gap-6 ${small ? "h-auto min-h-52" : ""}`}
        >
          <span className="font-bold text-xl md:text-3xl text-center">
            {title}
          </span>
          <span className="px-4 md:px-8 max-w-[600px] md:text-xl">
            {description}
          </span>
        </div>
      </div>
      {imageSrc && (
        <div className="flex flex-1">
          <Image
            className="object-cover md:min-h-96"
            src={imageSrc}
            alt="Imagen"
            width={1000}
            height={1000}
            draggable="false"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceDescription;
