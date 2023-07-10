import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Singup from "./Interfaces/Singup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Singup />} />
      </Routes>
    </Router>
  );
}

export default App;
