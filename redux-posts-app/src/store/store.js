import { applyMiddleware, createStore } from 'redux';
import PostsReducer from './reducers/PostsReducer';

const loggerMiddleware = (store) => (next) => (action) => {
    console.log('dispatching action', action);
    console.log('before dispatching state', store.getState());
    let result = next(action);
    setTimeout(() => {
        console.log('dispatch time out');
    }, 5000);
    console.log('next state', store.getState());
    return result;
};

const middleware = applyMiddleware(loggerMiddleware);

export const store = createStore(PostsReducer, middleware);
