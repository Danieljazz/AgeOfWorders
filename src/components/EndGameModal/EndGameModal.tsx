import { BoardContext } from "../../boardContext";
import { useContext } from "react";
import "./endGameModal.scss";
const EndGameModal = () => {
  const { guessWord, attempt, resetGame, gameState } = useContext(BoardContext);
  return (
    <div className="overlay">
      <div className="won-modal ">
        {gameState.won && (
          <>
            <h1>You have won</h1>
            <span>{`You've guessed: ${guessWord} in: ${attempt} attemps`}</span>
            <button onClick={resetGame}>Restart</button>
          </>
        )}
        {gameState.lost && (
          <>
            <h1>You lost</h1>
            <span>{`You've lost, word to guess was: ${guessWord}`}</span>
            <button onClick={resetGame}>Restart</button>
          </>
        )}
      </div>
    </div>
  );
};

export default EndGameModal;
