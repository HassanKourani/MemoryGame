import { Props } from "../Interfaces/WinModal";
import PlayAgainBtn from "./PlayAgainBtn";

const LoseModal = ({ attempts }: Props) => {
  return (
    <div className="fixed h-screen inset-0 flex justify-center items-center bg-black/90">
      <div className="win-modal">
        <span className="text-xl font-bold">TRY AGAIN?</span>
        <span className="text-xl ">number of attempts: {attempts}</span>
        <PlayAgainBtn />
      </div>
    </div>
  );
};

export default LoseModal;
