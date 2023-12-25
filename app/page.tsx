"use client";

//Context
import GameProvider from "@/contexts/GameContext";

//Animation
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import BG from "@/public/assets/animations/BG.json";

//Music
import ReactAudioPlayer from "react-audio-player";

//Components
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen gap-24 bg-auto md:bg-transparent sm:bg-open-blue -z-50">
      <Lottie
        style={{}}
        animationData={BG}
        loop={true}
        className="-z-10 absolute"
      />
      <div className="flex flex-col  justify-center items-center gap-10">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          className="lg:text-4xl md:text-2xl mb-5 text-blue-700"
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
