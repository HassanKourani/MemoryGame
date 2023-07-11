import { useContext } from "react";
import { handleNewGameContext } from "../Pages/Main";

const PlayAgainBtn = () => {
  const handleNewGame = useContext(handleNewGameContext);
  return (
    <button
      className="p-2 text-white bg-green-500 hover:bg-green-700 w-24 rounded-md"
      onClick={() => handleNewGame()}
    >
      Reset
    </button>
  );
};

export default PlayAgainBtn;
