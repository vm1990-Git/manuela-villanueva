import Icon from "./Icon";
import { IconType } from "react-icons";

interface TwoIconSectionProps {
  iconsSize: number;
  iconA: IconType;
  titleA: string;
  descriptionA: string;
  actionA: () => void;
  iconB: IconType;
  titleB: string;
  descriptionB: string;
  actionB: () => void;
}

const TwoIconSection: React.FC<TwoIconSectionProps> = ({
  iconsSize,
  iconA,
  titleA,
  descriptionA,
  actionA,
  iconB,
  titleB,
  descriptionB,
  actionB,
}) => {
  return (
    <div className="h-96 md:h-72 gap-8 flex flex-col md:flex-row justify-center items-center text-center bg-tertiary text-white">
      <Icon
        icon={iconA}
        size={iconsSize}
        title={titleA}
        description={descriptionA}
        action={actionA}
      />
      <Icon
        icon={iconB}
        size={iconsSize}
        title={titleB}
        description={descriptionB}
        action={actionB}
      />
    </div>
  );
};

export default TwoIconSection;
