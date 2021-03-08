import { formatPosts, getPosts } from '../../services/PostsService';

export const CREATE_POST_ACTION = '[Post Action] Create Post';
export const GET_POSTS = '[Post Action] Get Posts';
export const CONFIRMED_GET_POSTS = '[Post Action] Confirmed Get Posts';

export function createPostAction() {
    return {
        type: CREATE_POST_ACTION,
    };
}

export function getPostsAction() {
    return (dispatch, getState) => {
        getPosts().then((response) => {
            let posts = formatPosts(response.data);
            dispatch(confirmedGetPostsAction(posts));
        });
    };
}

export function confirmedGetPostsAction(posts) {
    return {
        type: CONFIRMED_GET_POSTS,
        payload: posts,
    };
}
