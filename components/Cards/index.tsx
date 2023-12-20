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

//Component
import GameCard from "@/components/Cards/Card";
import Modal from "@/components/Modal/Modal";

const GameCardList: React.FC = () => {
  const {
    timer,
    showModal,
    incrementFlips,
    incrementScore,
    decrementScore,
    openModal,
    resetTimer,
    gameResult,
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
      gameResult(false);
    }
  }, [timer]);

  useEffect(() => {
    setTimeout(() => {
      const isGameOver = gameCardList.every(
        (card) => card.status === "success",
      );
      if (isGameOver) {
        openModal();
        resetTimer();
        gameCardList.map((card) => (card.status = ""));
        setCards(shuffleArray(gameCardList));
        gameResult(true);
      }
    }, 500);
  }, [gameCardList]);

  return (
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
  );
};

export default GameCardList;
