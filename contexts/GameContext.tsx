"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { shuffleArray } from "@/utils/arrayUtils";
import gameData from "@/constants/data";

interface GameContextValues {
  cards: Array<number | string | boolean | ReactNode>;
  score: number;
  flips: number;
  timer: number;
  isWin: boolean;
  showModal: boolean;
  incrementScore: () => void;
  decrementScore: () => void;
  incrementFlips: () => void;
  restartGame: () => void;
  openModal: () => void;
  resetTimer: () => void;
  gameResult: (value: boolean) => void;
}

const GameContext = createContext<GameContextValues | null>(null);

const GameProvider: ({ children }: { children: ReactNode }) => {} = ({
  children,
}) => {
  const [score, setScore] = useState(0);
  const [flips, setFlips] = useState(0);
  const [timer, setTimer] = useState(60);
  const [showModal, setShowModal] = useState(false);
  const [cards] = useState(shuffleArray(gameData));
  const [isWin, setIsWin] = useState(false);

  const incrementFlips = () => {
    setFlips((prevFlips) => prevFlips + 1);
  };
  const incrementScore = () => {
    setScore((prevScore) => prevScore + 5);
  };
  const decrementScore = () => {
    setScore((prevScore) => prevScore - 5);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const resetTimer = () => {
    setTimer(0);
  };
  const gameResult = (value: boolean) => {
    setIsWin(value);
  };
  const restartGame = () => {
    setScore(0);
    setFlips(0);
    setTimer(60);
    setShowModal(false);
    setIsWin(false);
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <GameContext.Provider
      value={{
        score,
        flips,
        timer,
        showModal,
        cards,
        isWin,
        incrementScore,
        incrementFlips,
        decrementScore,
        restartGame,
        openModal,
        resetTimer,
        gameResult,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext sadece GameProvider içinde kullanılabilir");
  }
  return context;
};

export default GameProvider;
