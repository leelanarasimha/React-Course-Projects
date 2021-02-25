import { createStore } from 'redux';
import PostsReducer from './reducers/PostsReducer';

export const store = createStore(PostsReducer);
