import React from "react";
import { useGameContext } from "@/contexts/GameContext";

interface BadgeProps {
  title: string;
  icon: React.ReactElement;
}

export const TimerBadge: React.FC<BadgeProps> = ({ title, icon }) => {
  const { timer } = useGameContext();
  return (
    <div className="flex items-center bg-amber-50 text-white  rounded-full w-170 h-40 ">
      <div className="flex bg-amber-50 rounded-full w-60 h-60 items-center justify-center absolute ">
        {React.createElement(icon)}
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
