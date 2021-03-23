import axios from 'axios';

export function getPosts(token) {
    return axios.get(
        `https://react-course-b798e-default-rtdb.firebaseio.com/posts.json?auth=${token}`,
    );
}

export function createPost(postData, token) {
    return axios.post(
        `https://react-course-b798e-default-rtdb.firebaseio.com/posts.json?auth=${token}`,
        postData,
    );
}

export function updatePost(post, postId, token) {
    return axios.put(
        `https://react-course-b798e-default-rtdb.firebaseio.com/posts/${postId}.json?auth=${token}`,
        post,
    );
}

export function deletePost(postId, token) {
    return axios.delete(
        `https://react-course-b798e-default-rtdb.firebaseio.com/posts/${postId}.json?auth=${token}`,
    );
}

export function formatPosts(postsData) {
    let posts = [];
    for (let key in postsData) {
        posts.push({ ...postsData[key], id: key });
    }

    return posts;
}
