import PlayAgainBtn from "./PlayAgainBtn";

const WinModal = () => {
  return (
    <div className="fixed h-screen inset-0 flex justify-center items-center bg-black/90">
      <div className="win-modal">
        <span className="text-xl font-bold">CONGRATULATIONS YOU WON!!</span>
        <span className="text-xl ">number of attempts: 12</span>
        <PlayAgainBtn />
      </div>
    </div>
  );
};

export default WinModal;
