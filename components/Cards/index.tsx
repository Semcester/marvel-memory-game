"use client";
import React, { useRef, useState } from "react";
import gameData from "@/constants/data";
import { GameCardProps } from "@/types/CardType";

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  status,
  imageSrc,
  index,
}) => {
  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);
  const handleCardClick = () => {
    alert(id);
  };

  return (
    <div
      key={id}
      className="flex flex-wrap w-150 h-150 bg-amber-50 items-center justify-center rounded-lg cursor-pointer bg-front-cover"
      onClick={handleCardClick}
    >
      <div className="opacity-0">{React.createElement(imageSrc)}</div>
    </div>
  );
};

const GameCardList: React.FC = () => {
  return (
    <div className="flex flex-wrap w-900 gap-5 p-4 ">
      {gameData.map((card, index) => (
        <GameCard key={index} {...card} index={index} />
      ))}
    </div>
  );
};

export default GameCardList;
