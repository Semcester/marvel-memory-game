import { Bath, Hotel, Plane, Coctail, Surff } from "@/constants/images";
import { GameCardProps } from "@/types/CardType";

const gameData: GameCardProps[] = [
  { id: "1", name: "bath", status: true, imageSrc: Bath },
  { id: "1", name: "bath", status: false, imageSrc: Bath },
  { id: "2", name: "coctail", status: true, imageSrc: Coctail },
  { id: "2", name: "coctail", status: false, imageSrc: Coctail },
  { id: "3", name: "hotel", status: true, imageSrc: Hotel },
  { id: "3", name: "hotel", status: false, imageSrc: Hotel },
  { id: "4", name: "plane", status: true, imageSrc: Plane },
  { id: "4", name: "plane", status: false, imageSrc: Plane },
  { id: "5", name: "surff", status: true, imageSrc: Surff },
  { id: "5", name: "surff", status: false, imageSrc: Surff },
].sort(() => Math.random() - 0.5);

export default gameData;
