export interface CardType {
  id: number;
  image: string;
}
export interface CardProps {
  card: CardType;
  isPending: boolean;
  flippedCards: CardType[];
  matchedCards: number[];
  handleFlip: (card: CardType) => void;
}
