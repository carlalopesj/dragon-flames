import './App.css';
import Home from './pages/Home/Home';
import CharacterChoose from './pages/CharacterChoose/CharacterChoose';
import Game from './pages/Game/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<CharacterChoose />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
