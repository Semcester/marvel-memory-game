"use client";

//Context
import GameProvider from "@/contexts/GameContext";

//Animation
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import BG from "@/public/assets/animations/BG.json";

//Components
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 place-content-center bg-auto bg-fit m-auto  ">
      <Lottie
        style={{}}
        animationData={BG}
        loop={true}
        className="-z-20 absolute"
      />
      <div className="flex flex-col  justify-center items-center gap-10">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          className="text-4xl text-white mb-5 text-blue-700"
        >
          Memory Marvel Game
        </motion.h1>
        <GameProvider>
          <Cards />
        </GameProvider>
      </div>
    </main>
  );
}
