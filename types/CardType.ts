export interface GameCardProps {
  id: string;
  name: string;
  index?: number;
  status?: boolean;
  imageSrc: React.ComponentType<{}>;
}
