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
    { id: 2, image: "bmw.jpg" },
    { id: 3, image: "google.png" },
    { id: 4, image: "merc.jpg" },
    { id: 5, image: "nasa.png" },
    { id: 6, image: "nike.jpg" },
    { id: 7, image: "pepsi.png" },
    { id: 8, image: "starbucks.png" },
    { id: 9, image: "apple.png" },
    { id: 10, image: "bmw.jpg" },
    { id: 11, image: "google.png" },
    { id: 12, image: "merc.jpg" },
    { id: 13, image: "nasa.png" },
    { id: 14, image: "nike.jpg" },
    { id: 15, image: "pepsi.png" },
    { id: 16, image: "starbucks.png" },
  ]);
  useEffect(() => {}, []);

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
      <div className="center text-4xl">
        username:<b>{state?.username}</b>
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
        <span>Count: 0</span>
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
