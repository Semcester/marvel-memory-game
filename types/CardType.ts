import React from "react";

export interface GameCardProps {
  id: number;
  name: string;
  index?: number;
  status?: string;
  imageSrc: React.ComponentType<{}>;
  onCardClick?: () => void;
}
