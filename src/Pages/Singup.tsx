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
    <div className="center h-screen">
      <div className="bg-white border-2 border-black h-3/4 w-1/4 rounded-md p-4 flex justify-center">
        <h3>Sign Up</h3>
        <div className="">
          <input
            name="username"
            className="border border-gray-800"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSignup}>Submit</button>
          <>{error}</>
        </div>
      </div>
    </div>
  );
};

export default Singup;
