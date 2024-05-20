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
    <div
      className="flex flex-col items-center justify-center text-center bg-white bg-opacity-20 text-white p-12 rounded-full h-52 w-52 font-semibold hover:bg-gradient-to-r duration-300"
      onMouseEnter={selectoToTrue}
      onMouseLeave={selectoToFalse}
      onTouchStart={selectoToTrue}
      onTouchEnd={selectoToFalse}
    >
      {selected ? (
        <span className="duration-400 text-sm animate-fade-up animate-once">
          {description}
        </span>
      ) : (
        <>
          <IconComponent size={iconSize} />
          <span className="text-l pb-2">{title}</span>
        </>
      )}
    </div>
  );
};

export default ServiceItem;
