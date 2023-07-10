import { CardProps } from "../Interfaces/Card";

const Card = ({
  card,
  isPending,
  handleFlip,
  flippedCards,
  matchedCards,
}: CardProps) => {
  return (
    <div
      className="bg-gray-400 w-32 h-32 text-white center overflow-hidden p-4 rounded-md hover:bg-gray-600"
      onClick={() => {
        !isPending && handleFlip(card);
      }}
    >
      {flippedCards.some((c: any) => c.id === card.id) ||
      matchedCards.includes(card.id) ? (
        <img
          src={require(`../Images/${card.image}`)}
          alt={card.image}
          className="rounded-md"
        />
      ) : (
        <span className="text-4xl">?</span>
      )}
    </div>
  );
};

export default Card;
