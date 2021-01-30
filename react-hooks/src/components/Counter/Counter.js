import { useEffect, useRef, useState } from 'react';

const Counter = () => {
    const isMounted = useRef(false);
    const [counter, setCounter] = useState(0);
    const [x, setX] = useState(0);

    //When Componentdidmount Mounted and update
    useEffect(() => {
        console.log('Fires on mounted and also update');
        document.title = 'count: ' + counter;
    });

    //When Component only mounted
    useEffect(() => {
        console.log('Fires only on mounted');
    }, [x, counter]);

    //when component unmounted And also update
    useEffect(() => {
        return () => {
            console.log('fires when unmounted and also on update');
        };
    });

    //when component unmounted
    useEffect(() => {
        return () => {
            console.log('fires when unmounted ');
        };
    }, []);

    //when component only updated
    useEffect(() => {
        if (isMounted.current) {
            console.log('fires when updated');
        } else {
            isMounted.current = true;
        }
    });

    return (
        <div>
            <div>Counter Component</div>
            <div>You clicked {counter} times</div>
            <div>X Value: {x}</div>
            <div>
                <button
                    className='bg-red-500 px-3 py-1 text-white'
                    onClick={() => setCounter(counter + 1)}
                >
                    Increment
                </button>
                &nbsp;
                <button
                    className='bg-red-500 px-3 py-1 text-white'
                    onClick={() => setX(x + 1)}
                >
                    Increment X
                </button>
            </div>
        </div>
    );
};

export default Counter;
