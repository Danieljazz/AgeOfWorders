import { useContext } from "react";
import "./wordTile.scss";
import { BoardContext } from "../../boardContext";

const WordTile = ({
  letterNo,
  attemptNo,
}: {
  letterNo: number;
  attemptNo: number;
}) => {
  const { board, guessWord, attempt } = useContext(BoardContext);
  const letter = board[attemptNo][letterNo];
  const goodLetter = letter === guessWord[letterNo];
  const almostLetter =
    !goodLetter && letter !== "" && guessWord.includes(letter) ? true : false;
  const letterClass =
    attempt > attemptNo &&
    (goodLetter ? "correct" : almostLetter ? "almost" : "");
  return (
    <td className={`word-tile ${letterClass}`}>
      <span>{letter}</span>
    </td>
  );
};

export default WordTile;
