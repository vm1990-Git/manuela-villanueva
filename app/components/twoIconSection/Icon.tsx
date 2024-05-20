import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  size: number;
  title: string;
  description: string;
  action: () => void;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size: iSize,
  title,
  description,
  action,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full md:w-96 cursor-pointer"
      onClick={action}
    >
      <IconComponent size={iSize} />
      <span className="text-2xl md:text-3xl font-semibold">{title}</span>
      <span className="text-sm md:text-lg font-semibold">{description}</span>
    </div>
  );
};

export default Icon;
