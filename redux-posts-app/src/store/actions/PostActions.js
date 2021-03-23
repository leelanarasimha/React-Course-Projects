import {
    createPost,
    formatPosts,
    getPosts,
    deletePost,
    updatePost,
} from '../../services/PostsService';
import {
    CONFIRMED_CREATE_POST_ACTION,
    CONFIRMED_DELETE_POST_ACTION,
    CONFIRMED_EDIT_POST_ACTION,
    CONFIRMED_GET_POSTS,
} from './PostTypes';

export function deletePostAction(postId, history) {
    return (dispatch, getState) => {
        deletePost(postId).then((response) => {
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
        createPost(postData).then((response) => {
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
        getPosts().then((response) => {
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
        updatePost(post, post.id).then((reponse) => {
            dispatch(confirmedUpdatePostAction(post));
            history.push('/posts');
        });
    };
}
