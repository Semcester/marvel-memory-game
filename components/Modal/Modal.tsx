//React
import Image from "next/image";
import Confetti from "react-confetti";

//Context
import { useGameContext } from "@/contexts/GameContext";

//Components
import Completed from "@/public/assets/images/completed.png";
import ScoreBadge from "@/components/Badge/ScoreBadge";
import FlipsBadge from "@/components/Badge/FlipsBadge";

//Assets
import { Flip, Medal } from "@/constants/badges";
import { Restart, StarsEmpty } from "@/constants/images";

//Animation
import Lottie from "lottie-react";
import Win from "@/public/assets/animations/win.json";

export default function Modal({}) {
  const { restartGame, isWin } = useGameContext();

  const gameResultContent = () => {
    if (isWin) {
      return (
        <div className="flex items-center justify-center flex-col">
          <p className=" text-3xl text-amber-900">You Are Champ!</p>
          <Lottie animationData={Win} style={{ width: 100 }} />
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-center flex-col">
          <p className=" text-3xl text-amber-900">
            Next time, champ! Keep going!
          </p>
          <StarsEmpty className="" />
        </div>
      );
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black opacity-40"></div>
      {isWin && <Confetti />}
      <div className="fixed inset-0 z-50 flex top-52 justify-center">
        <div className="flex items-center justify-center flex-col gap-10 bg-white max-w-full max-h-96 p-28 rounded-lg shadow-lg">
          <Image className="" src={Completed} alt={"completed"} width={300} />
          <div className="flex flex-col items-center justify-center ">
            {gameResultContent()}
            <div className="flex gap-20 mt-8 mb-5">
              <ScoreBadge title={"Score:"} />
              <FlipsBadge title={"Flips:"} />
            </div>
            <Restart
              className="relative top-0 cursor-pointer hover:drop-shadow-lg"
              onClick={() => restartGame()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
