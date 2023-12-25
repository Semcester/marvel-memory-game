//React
import Image from "next/image";

//Context
import { useGameContext } from "@/contexts/GameContext";

//Components
import Completed from "@/public/assets/images/completed.png";
import ScoreBadge from "@/components/Badge/ScoreBadge";
import FlipsBadge from "@/components/Badge/FlipsBadge";

//Assets
import { Restart, StarsEmpty } from "@/constants/images";

//Animation
import Lottie from "lottie-react";
import Win from "@/public/assets/animations/win.json";

export default function Modal({}) {
  const { restartGame, isWin } = useGameContext();

  const gameResultContent = () => {
    if (isWin) {
      return (
        <div className="relative bottom-28 flex items-center justify-center flex-col">
          <p className=" text-5xl text-amber-900">You Are Champ!</p>
          <Lottie className="mt-5" animationData={Win} style={{ width: 100 }} />
        </div>
      );
    } else {
      return (
        <div className="relative bottom-28 flex items-center justify-center flex-col">
          <p className=" text-4xl text-amber-900">
            Next time, champ! Keep going!
          </p>
          <StarsEmpty className="mt-5" />
        </div>
      );
    }
  };
  return (
    <>
      <div className="absolute inset-0 z-50 bg-black w-full opacity-40"></div>
      <div className="absolute z-50 flex lg:w-900  md:1/1 h-1/1 top-52 justify-center ">
        <div className="flex flex-col lg:w-3/4 items-center bg-white p-5 gap-10 rounded-lg shadow-lg">
          <Image
            className="relative bottom-28"
            src={Completed}
            alt={"completed"}
            width={300}
          />
          <div className="flex flex-col items-center justify-center ">
            {gameResultContent()}
            <div className="relative bottom-14 flex gap-20 mt-8 mb-5">
              <ScoreBadge title={"Score:"} />
              <FlipsBadge title={"Flips:"} />
            </div>
            <Restart
              className="relative top-10 cursor-pointer hover:drop-shadow-lg"
              onClick={() => restartGame()}
            />
          </div>
        </div>
      </div>
    </>
  );
}
