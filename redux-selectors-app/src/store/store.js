import { createStore } from 'redux';
import { PostsReducer } from './reducers/PostsReducer';

const store = createStore(PostsReducer);
export default store;
