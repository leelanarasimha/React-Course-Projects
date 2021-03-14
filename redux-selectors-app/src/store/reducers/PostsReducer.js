import { INCREMENT_COUNT } from '../actions/PostsActions';

const initialState = {
    posts: [
        { id: 1, title: 'Post 1', isActive: true },
        { id: 2, title: 'Post 2', isActive: true },
        { id: 3, title: 'Post 3', isActive: false },
        { id: 4, title: 'Post 4', isActive: false },
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
