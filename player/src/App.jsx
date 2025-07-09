import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './game/pages/Home';
import Lobby from './game/pages/Lobby';
import Toss from './game/pages/Toss';
import Game from './game/pages/Game';
import Result from './game/pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/toss" element={<Toss />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
