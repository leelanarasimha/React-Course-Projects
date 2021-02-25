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
    return state;
}
