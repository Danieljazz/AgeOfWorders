import { useContext } from "react";
import "./App.scss";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import { BoardContext } from "./boardContext";
import EndGameModal from "./components/EndGameModal/EndGameModal";
const App = () => {
  const { gameState } = useContext(BoardContext);
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      {gameState.won || (gameState.lost && <EndGameModal />)}
    </div>
  );
};

export default App;
