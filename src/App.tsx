import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Singup from "./Interfaces/Singup";
import Main from "./Interfaces/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Singup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
