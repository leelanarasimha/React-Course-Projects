import { INCREMENT_COUNT } from '../actions/PostsActions';

const initialState = {
    posts: [
        { title: 'Post 1', isActive: true },
        { title: 'Post 2', isActive: true },
        { title: 'Post 3', isActive: false },
        { title: 'Post 4', isActive: false },
    ],
    filter: 'SHOW_ACTIVE',
    count: 0,
};

export function PostsReducer(state = initialState, action) {
    if (action.type === INCREMENT_COUNT) {
        return {
            ...state,
            count: state.count + 1,
        };
    }
    return state;
}
