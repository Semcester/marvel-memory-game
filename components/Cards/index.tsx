"use client";

//React
import React, { useEffect, useState } from "react";

//Context
import { useGameContext } from "@/contexts/GameContext";

//Helper & Types
import { shuffleArray } from "@/utils/arrayUtils";
import { SelectedCardType } from "@/types/CardType";

//Data
import gameData from "@/constants/data";

//Animations
import Lottie from "lottie-react";
import Start from "@/public/assets/animations/start.json";
import { motion } from "framer-motion";

//Component
import GameCard from "@/components/Cards/Card";
import Modal from "@/components/Modal/Modal";
import ScoreBadge from "@/components/Badge/ScoreBadge";
import { Flip, Medal, Time } from "@/constants/badges";
import FlipsBadge from "@/components/Badge/FlipsBadge";
import TimerBadge from "@/components/Badge/TimerBadge";

const GameCardList: React.FC = () => {
  const {
    timer,
    showModal,
    isStart,
    incrementFlips,
    incrementScore,
    decrementScore,
    openModal,
    resetTimer,
    gameResult,
    gameStart,
  } = useGameContext();
  const [gameCardList, setCards] = useState(shuffleArray(gameData));
  const [currentSelectedCard, setCurrentSelectedCard] =
    useState<SelectedCardType | null>(null);
  const [isTimeoutActive, setIsTimeoutActive] = useState(false);

  const handleCardClick = (id: number, name: string, status: string) => {
    incrementFlips();
    if (isTimeoutActive || status === "success") {
      return;
    }

    if (!currentSelectedCard) {
      setCurrentSelectedCard({ id, name });
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, status: "active" } : card,
        ),
      );
    } else {
      setIsTimeoutActive(true);
      if (currentSelectedCard.name === name) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.name === name ? { ...card, status: "success" } : card,
          ),
        );
        incrementScore();
      } else {
        decrementScore();
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id || card.id === currentSelectedCard
              ? { ...card, status: "active" }
              : card,
          ),
        );
      }

      setTimeout(() => {
        setIsTimeoutActive(false);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.status === "active" ? { ...card, status: "" } : card,
          ),
        );
      }, 1000);

      setCurrentSelectedCard(null);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      openModal();
      resetTimer();
      gameCardList.map((card) => (card.status = ""));
      setCards(shuffleArray(gameCardList));
    }
  }, [timer]);

  useEffect(() => {
    setTimeout(() => {
      const isGameOver = gameCardList.every(
        (card) => card.status === "success",
      );
      if (isGameOver) {
        gameResult(true);
        openModal();
        resetTimer();
        gameCardList.map((card) => (card.status = ""));
        setCards(shuffleArray(gameCardList));
      }
    }, 500);
  }, [gameCardList]);

  if (!isStart) {
    return (
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ delay: 0.2 }}
      >
        <Lottie
          animationData={Start}
          className="cursor-pointer w-72"
          loop={true}
          onClick={() => gameStart()}
        />
      </motion.div>
    );
  }

  return (
    <>
      <div className="flex gap-10">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
        >
          <ScoreBadge title={"Score:"} />
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.3 }}
        >
          {" "}
          <FlipsBadge title={"Flips:"} />
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.5 }}
        >
          <TimerBadge title={"Timer:"} />
        </motion.div>
      </div>
      <div className="flex flex-wrap w-900 gap-5 p-4 ">
        {showModal && <Modal />}
        {gameCardList.map((card, index) => (
          <GameCard
            key={index}
            {...card}
            onCardClick={(id: number, name: string, status: string) =>
              handleCardClick(id, name, status)
            }
          />
        ))}
      </div>
    </>
  );
};

export default GameCardList;
