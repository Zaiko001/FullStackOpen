import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Part0 from "./part0";
import Part1 from "./part1";

function App() {
  return (
    <Router>
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/part0/">Part0</Link>
            <Link to="/part1/">Part1</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/part0/" element={<Part0 />} />
          <Route path="/part1/" element={<Part1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
