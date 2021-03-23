import axiosInstance from '../services/AxiosInstance';

export function getPosts() {
    return axiosInstance.get(`posts.json`);
}

export function createPost(postData) {
    return axiosInstance.post(`posts.json`, postData);
}

export function updatePost(post, postId) {
    return axiosInstance.put(`posts/${postId}.json`, post);
}

export function deletePost(postId) {
    return axiosInstance.delete(`posts/${postId}.json`);
}

export function formatPosts(postsData) {
    let posts = [];
    for (let key in postsData) {
        posts.push({ ...postsData[key], id: key });
    }

    return posts;
}
