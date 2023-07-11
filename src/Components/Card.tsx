import { CardProps, CardType } from "../Interfaces/Card";
import { useState, useEffect } from "react";

const Card = ({
  card,
  isPending,
  handleFlip,
  flippedCards,
  matchedCards,
}: CardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(
    flippedCards.some((c) => c.id === card.id)
  );
  useEffect(() => {
    setIsFlipped(flippedCards.some((c) => c.id === card.id));

    return () => {
      setIsFlipped(false);
    };
  }, [flippedCards, card.id]);

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
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
