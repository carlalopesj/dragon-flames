import Home from './pages/Home/Home';
import CharacterChoose from './pages/CharacterChoose/CharacterChoose';
import Game from './pages/Game/Game';
import Store from './pages/Store/Store';
import Arena from './pages/Arena/Arena';
import Mission from './pages/Mission/Mission';
import Fight from './pages/Fight/Fight';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Restart from './pages/Restart/Restart';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<CharacterChoose />} />
          <Route path="/game" element={<Game />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/store" element={<Store />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/fight" element={<Fight />}></Route>
          <Route path='/restart' element={<Restart />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
