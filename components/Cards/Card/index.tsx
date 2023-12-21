import React, { useEffect, useState } from "react";
import { GameCardProps } from "@/types/CardType";
import { CardFront } from "@/constants/images";

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  status,
  imageSrc,
  onCardClick,
}) => {
  const handleCardClick = () => {
    onCardClick(id, name, status);
  };

  return (
    <div
      className={`flex flex-wrap w-150 h-150 bg-white items-center justify-center rounded-lg cursor-pointer`}
      onClick={handleCardClick}
    >
      <CardFront
        className={`${
          status === ""
            ? "transition-all ease-in-out  rotate-y-180 duration-450 absolute z-10"
            : "transition-all ease-in-out  rotate-y-0 duration-450  absolute -z-10"
        }`}
      />
      <div
        className={`${
          status === "active | success"
            ? "transition-all ease-in-out rotate-y-180  duration-450 "
            : "transition-all ease-in-out rotate-y-0  duration-450 "
        }`}
      >
        {React.createElement(imageSrc)}
      </div>
    </div>
  );
};

export default GameCard;
