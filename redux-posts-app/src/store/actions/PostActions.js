import {
    createPost,
    formatPosts,
    getPosts,
    deletePost,
    updatePost,
} from '../../services/PostsService';

export const CREATE_POST_ACTION = '[Post Action] Create Post';
export const CONFIRMED_CREATE_POST_ACTION =
    '[Post Action] Confirmed Create Post';
export const GET_POSTS = '[Post Action] Get Posts';
export const CONFIRMED_GET_POSTS = '[Post Action] Confirmed Get Posts';
export const EDIT_POST_ACTION = '[Post Action] Edit Post';
export const CONFIRMED_EDIT_POST_ACTION =
    '[Post Action] Confirmed Edit Post';
export const CONFIRMED_DELETE_POST_ACTION =
    '[Post Action] Confirmed Delete Post';

export function deletePostAction(postId, history) {
    return (dispatch, getState) => {
        const state = getState();
        const token = state.auth.auth.idToken;
        deletePost(postId, token).then((response) => {
            dispatch(confirmedDeletePostAction(postId));
            history.push('/posts');
        });
    };
}

export function confirmedDeletePostAction(postId) {
    return {
        type: CONFIRMED_DELETE_POST_ACTION,
        payload: postId,
    };
}

export function createPostAction(postData, history) {
    return (dispatch, getState) => {
        const state = getState();
        const token = state.auth.auth.idToken;
        createPost(postData, token).then((response) => {
            const singlePost = {
                ...postData,
                id: response.data.name,
            };
            dispatch(confirmedCreatePostAction(singlePost));
            history.push('/posts');
        });
    };
}

export function getPostsAction() {
    return (dispatch, getState) => {
        const state = getState();
        const token = state.auth.auth.idToken;
        getPosts(token).then((response) => {
            let posts = formatPosts(response.data);
            dispatch(confirmedGetPostsAction(posts));
        });
    };
}

export function confirmedCreatePostAction(singlePost) {
    return {
        type: CONFIRMED_CREATE_POST_ACTION,
        payload: singlePost,
    };
}

export function confirmedGetPostsAction(posts) {
    return {
        type: CONFIRMED_GET_POSTS,
        payload: posts,
    };
}

export function confirmedUpdatePostAction(post) {
    return {
        type: CONFIRMED_EDIT_POST_ACTION,
        payload: post,
    };
}

export function updatePostAction(post, history) {
    return (dispatch, getState) => {
        const state = getState();
        const token = state.auth.auth.idToken;
        updatePost(post, post.id, token).then((reponse) => {
            dispatch(confirmedUpdatePostAction(post));
            history.push('/posts');
        });
    };
}
