import { useContext } from "react";
import { BoardContext } from "../../boardContext";
import "./keyboard.scss";

export const Keyboard = () => {
  const { board, setBoard, attempt, letter, setLetter, onEnter } =
    useContext(BoardContext);
  const KeyboardHandler = (e: React.FormEvent) => {
    let i = letter;
    let j = attempt;
    const currentBoard = [...board];
    const target = e.target as HTMLInputElement;
    let typedLetter: string = target.value;
    if (typedLetter === "Enter") {
      onEnter();
    } else if (typedLetter === "DEL") {
      i > 0 ? (i -= 1) : (i = 0);
      currentBoard[attempt][i] = " ";
      setLetter(i);
      setBoard(currentBoard);
    } else if (i < 5 && j < 5) {
      currentBoard[attempt][letter] = typedLetter;
      setBoard(currentBoard);
      i < 5 ? i++ : (i = 4);
      setLetter(i);
    }
  };
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = [, "A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "DEL"];

  return (
    <div className="keyboard">
      <div>
        <div>
          <div className="row">
            {firstRow.map((key) => (
              <div key={key} onClick={KeyboardHandler}>
                <button value={key}>{key}</button>
              </div>
            ))}
          </div>
          <div className="row">
            {secondRow.map((key) => (
              <div key={key}>
                <button value={key} onClick={KeyboardHandler}>
                  {key}
                </button>
              </div>
            ))}
          </div>

          <div className="row">
            {thirdRow.map((key) => (
              <div key={key}>
                <button value={key} onClick={KeyboardHandler}>
                  {key}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
