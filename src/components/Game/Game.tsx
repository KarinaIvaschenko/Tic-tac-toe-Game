import { useState } from "react";
import Board from "../Board";
import "./Game.scss";
import { calculateWinner } from "../../helper";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index: any) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    const startNewGame = () => {
        setXIsNext(true);
        setBoard(Array(9).fill(null));
    };
    return (
        <div className="game">
            <h1 className="game__title">Tic-tac-toe</h1>
            <button className="game__btn" onClick={startNewGame}>
                Сlear field
            </button>
            <Board squares={board} click={handleClick} />
            {winner && (
                <p className="game__text">Congradulations, {winner} has won!</p>
            )}
        </div>
    );
};

export default Game;
