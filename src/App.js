import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TicTac } from './Tic Tac Toe Game/IndexPage'; 
import { PlayersPage } from './Tic Tac Toe Game/PlayersPage';

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayersPage/>} />
          <Route path="/game" element={<TicTac/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
