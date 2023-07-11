import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { CardType } from "../Interfaces/Card";
import PlayAgainBtn from "../Components/PlayAgainBtn";
import WinModal from "../Components/WinModal";
import LoseModal from "../Components/LoseModal";
export const handleNewGameContext = createContext<() => void>(() => {});
type difficultyType = "easy" | "hard" | "mid";
const Main = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [attempts, setAttempts] = useState<number>(0);
  const [maxAttempts, setMaxAttempts] = useState<number>(0);
  const [isWinModalOpen, setWinModalOpen] = useState<boolean>(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<difficultyType>("easy");
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
    if (!state?.username) navigate("/");
    shuffleCards();
    setTimeout(() => {
      setMatchedCards([]);
      setIsPending(false);
    }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNewGame = () => {
    setIsPending(true);
    setWinModalOpen(false);
    setIsLoseModalOpen(false);
    setMatchedCards([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    setFlippedCards([]);
    setAttempts(0);
    shuffleCards();
    setTimeout(() => {
      setMatchedCards([]);
      setIsPending(false);
    }, 5000);
  };

  const handleFlip = (card: CardType) => {
    const cardExists = flippedCards.find((c) => c.id === card.id);
    if (
      flippedCards.length === 2 ||
      matchedCards.includes(card.id) ||
      cardExists
    ) {
      return;
    }

    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1) {
      setAttempts(attempts + 1);
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

  useEffect(() => {
    if (attempts > 0 && matchedCards.length >= 16) {
      setWinModalOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedCards]);
  useEffect(() => {
    if (
      attempts >= maxAttempts &&
      (difficulty === "hard" || difficulty === "mid") &&
      matchedCards.length < 16
    ) {
      setIsLoseModalOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempts]);

  const handleChangeDifficulty = (diff: difficultyType) => {
    if (isPending) return;
    setDifficulty(diff);
    handleNewGame();
    if (diff === "mid") setMaxAttempts(12);
    else if (diff === "hard") setMaxAttempts(8);
  };

  return (
    <handleNewGameContext.Provider value={handleNewGame}>
      <div className="flex flex-col justify-center items-center gap-10 p-2">
        <div className="center text-2xl sm:text-4xl text-white gap-2">
          <span>Welcome </span>
          <b className="text-yellow-600"> {state?.username}</b>
        </div>
        <div className="flex gap-8">
          <div
            className={`center difficulty ${
              difficulty === "easy" && "bg-orange-200"
            }`}
            onClick={() => handleChangeDifficulty("easy")}
          >
            Easy
          </div>
          <div
            className={`center difficulty ${
              difficulty === "mid" && "bg-orange-200"
            }`}
            onClick={() => handleChangeDifficulty("mid")}
          >
            Medium
          </div>
          <div
            className={`center difficulty ${
              difficulty === "hard" && "bg-orange-200"
            }`}
            onClick={() => handleChangeDifficulty("hard")}
          >
            Hard
          </div>
        </div>
        <span className="text-white">
          {difficulty === "mid"
            ? "You only have 12 attempts!"
            : difficulty === "hard"
            ? "You only have 8 attempts!"
            : ""}
        </span>

        <div className="center">
          <div className="grid grid-cols-4 gap-4">
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
        <div className="flex justify-between items-center text-lg sm:text-xl gap-10">
          <PlayAgainBtn />
          <span className="text-white text-sm sm:text-2xl">
            attempts: {attempts}
          </span>
          <button
            className="p-2 text-white bg-red-500 hover:bg-red-600 w-24 rounded-md"
            onClick={() => navigate("/")}
          >
            Logout
          </button>
        </div>
      </div>
      {isWinModalOpen && <WinModal attempts={attempts} />}
      {isLoseModalOpen && <LoseModal attempts={attempts} />}
    </handleNewGameContext.Provider>
  );
};

export default Main;
