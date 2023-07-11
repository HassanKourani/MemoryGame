import PlayAgainBtn from "./PlayAgainBtn";

const WinModal = () => {
  return (
    <div className="fixed h-screen inset-0 flex justify-center items-center">
      <div className="h-60 w-1/3 bg-orange-100 border-4 border-darkBlue-100 rounded-xl text-white flex flex-col items-center justify-around">
        <span className="text-2xl font-bold">CONGRATULATIONS YOU WON!!</span>
        <span className="text-xl ">number of attempts: 12</span>
        <PlayAgainBtn />
      </div>
    </div>
  );
};

export default WinModal;
