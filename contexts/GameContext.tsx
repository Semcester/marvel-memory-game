"use client";

//React
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

//Helper
import { shuffleArray } from "@/utils/arrayUtils";

//Data
import gameData from "@/constants/data";

interface GameContextValues {
  cards: Array<number | string | boolean | ReactNode>;
  score: number;
  flips: number;
  timer: number;
  isWin: boolean;
  isStart: boolean;
  showModal: boolean;
  incrementScore: () => void;
  decrementScore: () => void;
  incrementFlips: () => void;
  restartGame: () => void;
  openModal: () => void;
  resetTimer: () => void;
  gameResult: (value: boolean) => void;
  gameStart: () => void;
}

const GameContext = createContext<GameContextValues | null>(null);

const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [flips, setFlips] = useState(0);
  const [timer, setTimer] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [cards] = useState(shuffleArray(gameData));
  const [isWin, setIsWin] = useState(false);

  const gameStart = () => {
    setIsStart(true);
  };
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
    setIsStart(false);
  };

  useEffect(() => {
    if (!isStart) {
      return;
    } else {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
      return () => clearInterval(timerInterval);
    }
  }, [isStart]);

  return (
    <GameContext.Provider
      value={{
        score,
        flips,
        timer,
        showModal,
        cards,
        isWin,
        isStart,
        incrementScore,
        incrementFlips,
        decrementScore,
        restartGame,
        openModal,
        resetTimer,
        gameResult,
        gameStart,
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
