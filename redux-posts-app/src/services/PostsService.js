import axios from 'axios';

export function getPosts() {
    return axios.get(
        `https://react-course-b798e-default-rtdb.firebaseio.com/posts.json`,
    );
}

export function createPost(postData) {
    return axios.post(
        `https://react-course-b798e-default-rtdb.firebaseio.com/posts.json`,
        postData,
    );
}

export function formatPosts(postsData) {
    let posts = [];
    for (let key in postsData) {
        posts.push({ ...postsData[key], id: key });
    }

    return posts;
}
