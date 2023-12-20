//React
import Image from "next/image";

//Context
import { useGameContext } from "@/contexts/GameContext";

//Components
import Completed from "@/public/assets/images/completed.png";
import ScoreBadge from "@/components/Badge/ScoreBadge";
import FlipsBadge from "@/components/Badge/FlipsScore";

//Assets
import { Flip, Medal } from "@/constants/badges";
import { Restart, StarFull, StarsEmpty } from "@/constants/images";

export default function Modal({}) {
  const { restartGame, isWin } = useGameContext();
  const gameResultContent = () => {
    console.log(isWin, "WINNER");
    if (isWin) {
      return (
        <div className="flex flex-col items-center justify-center absolute">
          <p className=" text-3xl text-amber-900">You Are Champ!</p>
          <StarFull className="" />
          <div className="flex gap-20 mt-8">
            <ScoreBadge title={"Score:"} icon={Medal} />
            <FlipsBadge title={"Flips:"} icon={Flip} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center justify-center absolute">
          <p className=" text-3xl text-amber-900">
            Next time, champ! Keep going!
          </p>
          <StarsEmpty className="" />
          <div className="flex gap-20 mt-8">
            <ScoreBadge title={"Score:"} icon={Medal} />
            <FlipsBadge title={"Flips:"} icon={Flip} />
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black opacity-40"></div>
      <div className="fixed inset-0 z-50 flex top-52 justify-center">
        <div className="flex items-center justify-center flex-col bg-white w-1/3 max-h-96 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            <Image
              className="relative bottom-48"
              src={Completed}
              alt={"completed"}
              width={300}
            />
          </h2>
          {gameResultContent()}
          <Restart
            className="absolute bottom-80 cursor-pointer hover:drop-shadow-2xl"
            onClick={() => restartGame()}
          />
        </div>
      </div>
    </>
  );
}
