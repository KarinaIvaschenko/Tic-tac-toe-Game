import { FC } from "react";
import Square from "../Square";
import "./Board.scss";

interface BoardProps {
    squares: any[]; // Замените 'any' на более конкретный тип, если это возможно
    click: (index: number) => void;
}

const Board: FC<BoardProps> = ({ squares, click }) => {
    return (
        <div className="board">
            {squares.map((square, index) => (
                <Square
                    key={index}
                    value={square}
                    onClick={() => click(index)}
                />
            ))}
        </div>
    );
};

export default Board;
