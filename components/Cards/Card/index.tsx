//React
import React from "react";

//Types
import { GameCardProps } from "@/types/CardType";

//Assets
import { CardFront } from "@/constants/images";

import { motion } from "framer-motion";

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  status,
  imageSrc,
  onCardClick,
}) => {
  const handleCardClick = () => {
    onCardClick?.(id, name, status);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ delay: 0.7 }}
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
        <div>{React.createElement(imageSrc)}</div>
      </div>
    </motion.div>
  );
};

export default GameCard;
