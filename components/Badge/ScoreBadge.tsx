//React
import React from "react";

//Context
import { useGameContext } from "@/contexts/GameContext";

//Component
import { Medal } from "@/constants/badges";

//Types
import { BadgeProps } from "@/types/BadgeType";

export const ScoreBadge: React.FC<BadgeProps> = ({ title }) => {
  const { score } = useGameContext();
  return (
    <div className="flex items-center bg-amber-50 text-white  rounded-full w-170 h-40 border-2">
      <div className="flex bg-amber-50 rounded-full w-60 h-60 items-center justify-center absolute border-2">
        <Medal />
      </div>
      <div>
        <span className="text-black ml-20">
          {title}
          {score}
        </span>
      </div>
    </div>
  );
};

export default ScoreBadge;
