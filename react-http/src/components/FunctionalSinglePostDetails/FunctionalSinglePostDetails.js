import axios from 'axios';
import { useEffect, useState } from 'react';

export function FunctionalSinglePostDetails(props) {
    const [post, setPost] = useState(null);

    //fires on component mounted and component update
    useEffect(() => {
        if (post && post.id === props.id) {
            return;
        }
        getPostDetails();
    });

    function getPostDetails() {
        axios
            .get(
                `https://react-course-b798e-default-rtdb.firebaseio.com/posts/${props.id}.json`,
            )
            .then((response) => {
                setPost({ ...response.data, id: props.id });
            });
    }

    if (post) {
        return (
            <div className='my-2 border border-gray-300 shadow p-4'>
                <div>Id: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Description: {post.description}</div>
            </div>
        );
    }
    return null;
}
