//initialize state
const initialState = { counter: 4 };

//create action creators
const increment = () => {
    return {
        type: 'increment',
    };
};

const decrement = () => {
    return {
        type: 'decrement',
    };
};

//reducer
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }

    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }

    return state;
}

//create store
const store = createStore(counterReducer, { counter: 0 });

function render() {
    const state = store.getState();

    console.log(state);
    document.getElementById('counter').innerHTML = state.counter;
}
render();

store.subscribe(render);

document
    .getElementById('increment')
    .addEventListener('click', function () {
        store.dispatch(increment());
    });

document
    .getElementById('decrement')
    .addEventListener('click', function () {
        store.dispatch(decrement());
    });
