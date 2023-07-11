import { CardProps, CardType } from "../Interfaces/Card";

const Card = ({
  card,
  isPending,
  handleFlip,
  flippedCards,
  matchedCards,
}: CardProps) => {
  return (
    <div
      className="card"
      onClick={() => {
        !isPending && handleFlip(card);
      }}
    >
      {flippedCards.some((c: CardType) => c.id === card.id) ||
      matchedCards.includes(card.id) ? (
        <img
          src={require(`../Images/${card.image}`)}
          alt={card.image}
          className="rounded-md"
        />
      ) : (
        <img
          src={require(`../Images/question-mark_5726775.png`)}
          alt={"unknown"}
          className="rounded-md"
        />
      )}
    </div>
  );
};

export default Card;
