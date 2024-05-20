import React from "react";

import { AiOutlineCaretRight } from "react-icons/ai";

interface ProfileItemProps {
  detail: string;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ detail }) => {
  return (
    <div className="flex justify-center px-4 gap-0.5">
      <div className="translate-y-[5px]">
        <AiOutlineCaretRight size={12} />
      </div>
      <span className="-translate-y-[2px]">{detail}</span>
    </div>
  );
};

export default ProfileItem;
