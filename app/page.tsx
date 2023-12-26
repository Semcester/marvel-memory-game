"use client";
//React
import { useEffect, useRef, useState } from "react";

//Context
import GameProvider from "@/contexts/GameContext";

//Animation
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import BG from "@/public/assets/animations/BG.json";

//Components
import Cards from "@/components/Cards";

//İcons
import AudioOn from "@/public/assets/icons/audio-on.svg";
import AudioOff from "@/public/assets/icons/audio-off.svg";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying] = useState(true);

  const toggleMusic = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  useEffect(() => {
    if (audioRef.current) {
      console.log(isPlaying);
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  return (
    <main className="flex items-center justify-center flex-col min-h-screen gap-24 bg-open-blue">
      <audio
        ref={audioRef}
        autoPlay={true}
        controls={false}
        loop={true}
        muted={isMuted}
      >
        <source src={"assets/audio/fun.mp3"} />
      </audio>
      <button onClick={toggleMusic}>
        <div className="absolute bottom-24 right-32 z-20">
          {isMuted ? <AudioOff fill="#02A8FF" /> : <AudioOn fill="#02A8FF" />}
        </div>
      </button>
      <Lottie animationData={BG} loop={true} className="z-10 absolute" />
      <div className="flex flex-col z-20 justify-center items-center gap-10">
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
