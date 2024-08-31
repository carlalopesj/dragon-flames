import './App.css';
import Home from './pages/Home/Home';
import CharacterChoose from './pages/CharacterChoose/CharacterChoose';
import Game from './pages/Game/Game';
import Loja from './pages/Loja/Loja';
import Arena from './pages/Arena/Arena';
import Missao from './pages/Missao/Missao';
import Fight from './pages/Fight/Fight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<CharacterChoose />} />
          <Route path="/game" element={<Game />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/missao" element={<Missao />} />
          <Route path="/fight" element={<Fight />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
