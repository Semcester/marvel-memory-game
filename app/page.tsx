"use client";
import Cards from "@/components/Cards";
import ScoreBadge from "@/components/Badge/ScoreBadge";

import { Medal, Flip, Time } from "@/constants/badges";
import GameProvider from "@/contexts/GameContext";
import FlipsBadge from "@/components/Badge/FlipsScore";
import TimerBadge from "@/components/Badge/TimerBadge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 place-content-center bg-auto bg-bg-cover bg-fit m-auto ">
      <div className="flex flex-col  justify-center items-center gap-10">
        <h1 className="text-4xl text-white mb-10 ">Memory Marvel</h1>
        <GameProvider>
          <div className="flex gap-10">
            <ScoreBadge title={"Score:"} icon={Medal} />
            <FlipsBadge title={"Flips:"} icon={Flip} />
            <TimerBadge title={"Timer:"} icon={Time} />
          </div>
          <Cards />
        </GameProvider>
      </div>
    </main>
  );
}
