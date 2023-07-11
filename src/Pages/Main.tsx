import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { CardType } from "../Interfaces/Card";

const Main = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ]);
  const [isPending, setIsPending] = useState<boolean>(true);

  const [cards, setCards] = useState([
    { id: 1, image: "apple.png" },
    { id: 2, image: "banana.png" },
    { id: 3, image: "orange.png" },
    { id: 4, image: "pear.png" },
    { id: 5, image: "pineapple.png" },
    { id: 6, image: "strawberry.png" },
    { id: 7, image: "watermelon.png" },
    { id: 8, image: "grapes.png" },
    { id: 9, image: "apple.png" },
    { id: 10, image: "banana.png" },
    { id: 11, image: "orange.png" },
    { id: 12, image: "pear.png" },
    { id: 13, image: "pineapple.png" },
    { id: 14, image: "strawberry.png" },
    { id: 15, image: "watermelon.png" },
    { id: 16, image: "grapes.png" },
  ]);

  const shuffleCards = () => {
    const shuffledCards = [...cards];

    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i],
      ];
    }

    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
    setTimeout(() => {
      setMatchedCards([]);
      setIsPending(false);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFlip = (card: CardType) => {
    if (flippedCards.length === 2 || matchedCards.includes(card.id)) {
      return;
    }

    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1) {
      // If there is only one card flipped, check for a match
      if (flippedCards[0].image === card.image) {
        setMatchedCards([...matchedCards, flippedCards[0].id, card.id]);
        setFlippedCards([]);
      } else {
        setIsPending(true);
        setTimeout(() => {
          setFlippedCards([]);
          setIsPending(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="center text-4xl text-white">
        username:<b className="text-yellow-600">{state?.username}</b>
      </div>

      <div className="center">
        <div className="grid grid-cols-4 gap-4 cursor-pointer ">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isPending={isPending}
              flippedCards={flippedCards}
              matchedCards={matchedCards}
              handleFlip={handleFlip}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center text-xl gap-10">
        <button
          className="p-4 text-white bg-green-500 hover:bg-green-600"
          onClick={() => navigate("/")}
        >
          New Game
        </button>
        <span className="text-white">Count: 0</span>
        <button
          className="p-4 text-white bg-red-500 hover:bg-red-600"
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Main;
