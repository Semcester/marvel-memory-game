"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface GameContextValues {
  score: number;
  flips: number;
  timer: number;
  incrementScore: () => void;
  decrementScore: () => void;
  incrementFlips: () => void;
}

const GameContext = createContext<GameContextValues | null>(null);

const GameProvider: ({ children }: { children: ReactNode }) => {} = ({
  children,
}) => {
  const [score, setScore] = useState(0);
  const [flips, setFlips] = useState(0);
  const [timer, setTimer] = useState(10);

  const incrementFlips = () => {
    setFlips((prevFlips) => prevFlips + 1);
  };

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 5);
  };
  const decrementScore = () => {
    setScore((prevScore) => prevScore - 5);
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
        incrementScore,
        incrementFlips,
        decrementScore,
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
