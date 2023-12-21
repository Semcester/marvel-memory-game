//React
import React from "react";

//Context
import { useGameContext } from "@/contexts/GameContext";

//Component
import { Time } from "@/constants/badges";

//Types
import { BadgeProps } from "@/types/BadgeType";

export const TimerBadge: React.FC<BadgeProps> = ({ title }) => {
  const { timer } = useGameContext();
  return (
    <div className="flex items-center bg-amber-50 text-white  rounded-full w-170 h-40 border-2">
      <div className="flex bg-amber-50 rounded-full w-60 h-60 items-center justify-center absolute border-2">
        <Time />
      </div>
      <div>
        <span className="text-black ml-20">
          {title}
          {timer}
        </span>
      </div>
    </div>
  );
};

export default TimerBadge;
