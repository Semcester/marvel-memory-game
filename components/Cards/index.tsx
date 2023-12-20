"use client";

import { useEffect, useState } from "react";
import { shuffleArray } from "@/utils/arrayUtils";
import gameData from "@/constants/data";

import GameCard from "@/components/Cards/Card";
import Card from "@/components/Cards/Card";
import { useGameContext } from "@/contexts/GameContext";

const GameCardList: React.FC = () => {
  const { flips, timer, incrementFlips, incrementScore, decrementScore } =
    useGameContext();
  const [cards, setCards] = useState(shuffleArray(gameData));
  const [currentSelectedCard, setCurrentSelectedCard] = useState<
    typeof Card | null
  >(null);
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
            card.id === id || card.id === currentSelectedCard.id
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
    console.log(timer);
    if (timer === 0) {
      alert("BİTTİİ");
    }
  }, [timer]);

  useEffect(() => {
    setTimeout(() => {
      const isGameOver = cards.every((card) => card.status === "success");
      if (isGameOver) {
        alert("Congratulations! You matched all cards!");
      }
    }, 500);
  }, [cards]);

  return (
    <div className="flex flex-wrap w-900 gap-5 p-4 ">
      {cards.map((card, index) => (
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
