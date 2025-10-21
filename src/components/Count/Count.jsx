import "./Count.css";
import {useState} from "react";
export const Count = ({btnText, onConfirm}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const confirm = () => {
        if (count > 0) {
            onConfirm(count);
        }
    };

    return (
        <div className="count-container">
            <div className="count-buttons">
                <button className="btn" onClick={decrement} disabled={count === 0}>-</button>
                <span>{count}</span>
                <button className="btn" onClick={increment}>+</button>
            </div>
            <button className="btn btn-add" onClick={confirm} disabled={count === 0}>{btnText}</button>
        </div>
    );
};