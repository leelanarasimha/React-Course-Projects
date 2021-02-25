import { useEffect, useState } from 'react';
import { decrement, increment } from '../../Store/actions/CounterActions';
import { store } from '../../Store/store';

export function CounterFunction(props) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        updateState();
        store.subscribe(updateState);
    }, []);

    function updateState() {
        const state = store.getState();
        setCounter(state.counter);
    }

    function onIncrement() {
        store.dispatch(increment());
    }

    function onDecrement() {
        store.dispatch(decrement());
    }

    return (
        <div>
            <div>Counter Function Component</div>
            <div>{counter}</div>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        </div>
    );
}
