import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import PostsReducer from './reducers/PostsReducer';
import thunk from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';

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

// const fetchDataMiddleware = (store) => (next) => (action) => {
//     if (action.type === GET_POSTS) {
//         //ajax call
//     }

//     return next(action);
// };

const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
});

export const store = createStore(reducers, composeEnhancers(middleware));
