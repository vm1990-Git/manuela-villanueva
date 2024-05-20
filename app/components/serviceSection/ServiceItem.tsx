import React, { useCallback, useState } from "react";
import { IconType } from "react-icons";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: IconType;
  iconSize: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  icon: IconComponent,
  iconSize,
}) => {
  const [selected, setSelected] = useState(false);

  const selectoToFalse = useCallback(() => {
    setSelected(false);
  }, []);

  const selectoToTrue = useCallback(() => {
    setSelected(true);
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center bg-white bg-opacity-20 text-white sm:rounded-full h-24 sm:h-60 w-[100vw] sm:w-60 font-semibold"
        onMouseEnter={selectoToTrue}
        onMouseLeave={selectoToFalse}
      >
        {selected ? (
          <>
            <div className="flex sm:hidden justify-center items-center w-80 animate-in fade-in duration-1000">
              <IconComponent size={iconSize} />
              <span className="w-72 px-2 text-base text-start ">
                {description}
              </span>
            </div>
            <div className="hidden sm:flex justify-center items-center p-4 animate-in fade-in duration-1000">
              <span className="w-60 px-1 text-base text-center">
                {description}
              </span>
            </div>
          </>
        ) : (
          <div className="flex flex-row sm:flex-col justify-center items-center w-80 gap-2">
            <IconComponent size={iconSize} />
            <span className="text-lg pb-2 translate-y-1">{title}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceItem;
