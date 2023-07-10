import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Singup from "./Pages/Singup";
import Main from "./Pages/Main";

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
