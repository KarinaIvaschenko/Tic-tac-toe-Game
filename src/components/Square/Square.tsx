import { FC } from "react";
import "./Square.scss";

interface ISquare {
    value: string;
    onClick: () => void;
}
const Square: FC<ISquare> = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;
