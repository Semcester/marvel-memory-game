//React
import React from "react";

//Context
import { useGameContext } from "@/contexts/GameContext";

//Types
import { BadgeProps } from "@/types/BadgeType";

//Components
import { Flip } from "@/constants/badges";

export const FlipsBadge: React.FC<BadgeProps> = ({ title }) => {
  const { flips } = useGameContext();
  return (
    <div className="flex items-center bg-amber-50 text-white  rounded-full w-170 h-40 border-2">
      <div className="flex bg-amber-50 rounded-full w-60 h-60 items-center justify-center absolute border-2">
        <Flip />
      </div>
      <div>
        <span className="text-black ml-20">
          {title}
          {flips}
        </span>
      </div>
    </div>
  );
};

export default FlipsBadge;
