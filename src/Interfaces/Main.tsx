import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

interface Card {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const Main = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const cards = [
    { id: 1, image: "link1", isFlipped: false, isMatched: false },
    { id: 2, image: "link2", isFlipped: false, isMatched: false },
    { id: 3, image: "link2", isFlipped: false, isMatched: false },
    { id: 4, image: "link4", isFlipped: false, isMatched: false },
    { id: 5, image: "link5", isFlipped: false, isMatched: false },
    { id: 6, image: "link6", isFlipped: false, isMatched: false },
    { id: 7, image: "link4", isFlipped: false, isMatched: false },
    { id: 8, image: "link8", isFlipped: false, isMatched: false },
    { id: 9, image: "link5", isFlipped: false, isMatched: false },
    { id: 10, image: "link6", isFlipped: false, isMatched: false },
    { id: 11, image: "link8", isFlipped: false, isMatched: false },
    { id: 12, image: "link1", isFlipped: false, isMatched: false },
  ];
  const handleFlip = (card: {
    id: number;
    image: string;
    isFlipped: boolean;
    isMatched: boolean;
  }) => {
    setFlippedCards([...flippedCards, card]);
    if (flippedCards.length === 2) {
      if (flippedCards[0].image === flippedCards[1].image) {
        setMatchedCards([
          ...matchedCards,
          flippedCards[0].id,
          flippedCards[1].id,
        ]);
      }
      setFlippedCards([]);
    }
  };

  return (
    <div>
      <h1>{state?.username}</h1>
      <button onClick={() => navigate("/")}>Logout</button>

      <div className="center">
        <div className="w-1/4 grid grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-800 w-10 h-10 text-white center"
              onClick={() => {
                handleFlip(card);
              }}
            >
              {(flippedCards.some((c: any) => c.id === card.id) ||
                matchedCards.includes(card.id)) &&
                card.image}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
