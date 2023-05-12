import { useContext, useEffect } from "react";
import WordTile from "../WordTile/WordTile";
import "./board.scss";
import { BoardContext } from "../../boardContext";

const Board = () => {
  const { board } = useContext(BoardContext);
  useEffect(() => {
    console.log("das", board);
  }, [board]);

  return (
    <table>
      <tbody>
        <tr>
          <WordTile letterNo={0} attemptNo={0} />
          <WordTile letterNo={1} attemptNo={0} />
          <WordTile letterNo={2} attemptNo={0} />
          <WordTile letterNo={3} attemptNo={0} />
          <WordTile letterNo={4} attemptNo={0} />
        </tr>
        <tr>
          <WordTile letterNo={0} attemptNo={1} />
          <WordTile letterNo={1} attemptNo={1} />
          <WordTile letterNo={2} attemptNo={1} />
          <WordTile letterNo={3} attemptNo={1} />
          <WordTile letterNo={4} attemptNo={1} />
        </tr>
        <tr>
          <WordTile letterNo={0} attemptNo={2} />
          <WordTile letterNo={1} attemptNo={2} />
          <WordTile letterNo={2} attemptNo={2} />
          <WordTile letterNo={3} attemptNo={2} />
          <WordTile letterNo={4} attemptNo={2} />
        </tr>
        <tr>
          <WordTile letterNo={0} attemptNo={3} />
          <WordTile letterNo={1} attemptNo={3} />
          <WordTile letterNo={2} attemptNo={3} />
          <WordTile letterNo={3} attemptNo={3} />
          <WordTile letterNo={4} attemptNo={3} />
        </tr>
        <tr>
          <WordTile letterNo={0} attemptNo={4} />
          <WordTile letterNo={1} attemptNo={4} />
          <WordTile letterNo={2} attemptNo={4} />
          <WordTile letterNo={3} attemptNo={4} />
          <WordTile letterNo={4} attemptNo={4} />
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
