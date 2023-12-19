import Cards from "@/components/Cards";
import Badge from "@/components/Badge/Badge";

import { Medal, Flip, Time } from "@/constants/badges";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 place-content-center bg-auto bg-bg-cover bg-fit m-auto ">
      <div className="flex flex-col  justify-center items-center gap-10">
        <h1 className="text-4xl text-white mb-10 ">Memory Marvel</h1>
        <div className="flex gap-10">
          <Badge title={"Score:"} icon={Medal} />
          <Badge title={"Flips:"} icon={Flip} />
          <Badge title={"Timer:"} icon={Time} />
        </div>
        <Cards />
      </div>
    </main>
  );
}
