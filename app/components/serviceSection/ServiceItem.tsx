import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

interface ServiceItemProps {
  title: string;
  icon: IconType;
  iconSize: number;
  id: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  icon: IconComponent,
  iconSize,
  id,
}) => {
  const router = useRouter();

  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center bg-white bg-opacity-20 text-white sm:rounded-full h-24 sm:h-60 w-[100vw] sm:w-60 font-semibold cursor-pointer
        transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => router.push(`servicios/${id}`)}
      >
        <div className="flex flex-row sm:flex-col justify-start items-center w-80 gap-2">
          <div className="xl:flex justify-start md:justify-center p-4 sm:p-0">
            <IconComponent size={iconSize} />
          </div>
          <span className="text-start md:text-center text-lg pb-2 translate-y-1  md:w-full">
            {title}
          </span>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
