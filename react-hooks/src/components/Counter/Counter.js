import { useEffect, useRef, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>Counter Component</div>
            <div>You clicked {counter} times</div>
            <div>
                <button
                    className='bg-red-500 px-3 py-1 text-white'
                    onClick={() => setCounter(counter + 1)}
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default Counter;
