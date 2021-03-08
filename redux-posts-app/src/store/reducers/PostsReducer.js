import {
    CONFIRMED_GET_POSTS,
    CREATE_POST_ACTION,
} from '../actions/PostActions';

const initialState = {
    posts: [
        { id: 1, title: 'Post Title', description: 'Sample Description' },
        {
            id: 2,
            title: 'Post Title 2',
            description: 'Sample Description 2',
        },
        {
            id: 3,
            title: 'Post Title 2',
            description: 'Sample Description 2',
        },
    ],
};

export default function PostsReducer(state = initialState, actions) {
    if (actions.type === CREATE_POST_ACTION) {
        const post = {
            id: Math.random(),
            title: 'Post Title 2asdasd',
            description: 'Sample Description 2asdasdas',
        };

        const posts = [...state.posts];
        posts.push(post);
        return {
            ...state,
            posts,
        };
    }

    if (actions.type === CONFIRMED_GET_POSTS) {
        return {
            ...state,
            posts: actions.payload,
        };
    }
    return state;
}
