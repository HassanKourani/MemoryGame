import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Singup = () => {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const handleSignup = () => {
    username.length < 3
      ? setError("username must be more than 3 chars.")
      : navigate("/main", { state: { username: username } });
  };
  return (
    <>
      <div className="h-screen center flex-col">
        <h1 className="text-4xl sm:text-6xl font-bold text-center text-white border-b-2 border-white w-max p-4">
          MEMORY GAME
        </h1>
        <div className="center flex-col mt-6">
          <input
            name="username"
            placeholder="Enter username here"
            className="border border-orange-200 p-2 rounded-md outline-none bg-orange-200/50 placeholder:text-white/50 w-80 text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={handleSignup}
            className="mt-4 bg-orange-100 text-white p-2 rounded-md float-right w-80 hover:bg-orange-200"
          >
            SignUp
          </button>
          <span className="text-xs text-red-500 p-1 mt-2">{error}</span>
        </div>
      </div>
    </>
  );
};

export default Singup;
