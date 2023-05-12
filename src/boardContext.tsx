import { ReactNode, createContext, useState } from "react";
import words from "./assets/words_en.json";

const Board = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export type BoardContextType = {
  board: string[][];
  setBoard: (value: string[][] | ((prev: string[][]) => string[][])) => void;
  attempt: number;
  setAttempt: (value: number | ((prev: number) => number)) => void;
  letter: number;
  setLetter: (value: number | ((prev: number) => number)) => void;
  guessWord: string;
  bankWord: string[];
  gameState: { won: boolean; lost: boolean };
  onEnter: () => void;
  resetGame: () => void;
};

export const BoardContext = createContext({} as BoardContextType);

export const BoardContextProvider = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState(Board);
  const [attempt, setAttempt] = useState(0);
  const [letter, setLetter] = useState(0);
  const [gameState, setGameState] = useState({ lost: false, won: false });
  let bankWord = words;
  const [guessWord, setGuessWord] = useState(
    bankWord[Math.floor(Math.random() * bankWord.length)].toUpperCase()
  );
  console.log(guessWord);
  const onEnter = () => {
    console.log("new board is", Board);
    let j = attempt + 1;
    let currentWord = "";
    board[attempt].forEach((letter) => {
      currentWord += letter;
    });
    if (j > 4) {
      const currentState = { ...gameState };
      currentState.lost = true;
      setGameState(currentState);
    }
    if (bankWord.includes(currentWord.toLocaleLowerCase())) {
      if (currentWord === guessWord) {
        const currentState = { ...gameState };
        currentState.won = true;
        setGameState(currentState);
      }
      setAttempt(j);
      setLetter(0);
    } else alert("that word does not exists :(");
  };
  const resetGame = () => {
    setGuessWord(
      bankWord[Math.floor(Math.random() * bankWord.length)].toUpperCase()
    );
    const Board = [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ];
    setBoard(Board);
    setAttempt(0);
    setLetter(0);
    const currentState = { lost: false, won: false };
    setGameState(currentState);
  };
  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        attempt,
        setAttempt,
        letter,
        setLetter,
        guessWord,
        bankWord,
        gameState,
        onEnter,
        resetGame,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
