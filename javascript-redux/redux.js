function createStore(reducer, preloadedState) {
    let state = preloadedState;
    const listeners = [];

    function getState() {
        return state;
    }

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    }

    return {
        dispatch,
        subscribe,
        getState,
    };
}
