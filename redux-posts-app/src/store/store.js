import axios from 'axios';
import { applyMiddleware, compose, createStore } from 'redux';
import { confirmedGetPostsAction, GET_POSTS } from './actions/PostActions';
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

const fetchDataMiddleware = (store) => (next) => (action) => {
    if (action.type === GET_POSTS) {
        //ajax call
        axios
            .get(
                `https://react-course-b798e-default-rtdb.firebaseio.com/posts.json`,
            )
            .then((response) => {
                console.log(response.data);
                let posts = [];
                for (let key in response.data) {
                    posts.push({ ...response.data[key], id: key });
                }
                store.dispatch(confirmedGetPostsAction(posts));
            });
    }

    return next(action);
};

const middleware = applyMiddleware(loggerMiddleware, fetchDataMiddleware);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    PostsReducer,
    composeEnhancers(middleware),
);
