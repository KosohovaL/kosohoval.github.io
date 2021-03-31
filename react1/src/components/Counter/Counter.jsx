import { useState, useCallback } from 'react';
import './Counter.css'

function SetCounter(props) {

    const [counter, setCounter] = useState(9);

    const dnCounter = useCallback(() => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }, [counter])
    const upCounter = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])



    return (
        <div>
            <h1>Counter</h1>
            <div className="counter">
                <button onClick={dnCounter}>-</button>
                <div>{counter}</div>
                <button onClick={upCounter}>+</button>
            </div>

        </div>
    );
}

export default SetCounter;
