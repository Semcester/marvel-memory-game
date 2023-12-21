import React from "react";

type SVGImage = React.FC<React.SVGProps<SVGSVGElement>>;
export interface GameCardProps {
  id: number;
  name: string;
  index: number;
  status: string;
  imageSrc: SVGImage;
  onCardClick?: (id: number, name: string, status: string) => void;
}
export interface SelectedCardType {
  id: number;
  name: string;
}
