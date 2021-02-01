import { Component } from 'react';
import { Post } from '../Post/Post';
import axios from 'axios';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                `https://react-course-b798e-default-rtdb.firebaseio.com/posts.json`,
            )
            .then((response) => {
                const posts = [];
                for (let key in response.data) {
                    posts.push({ ...response.data[key], id: key });
                }

                this.setState({
                    posts: posts,
                });
            });
    }

    render() {
        const posts = this.state.posts.map((post) => {
            return <Post key={post.id} post={post} />;
        });
        return (
            <div>
                <h1 className='font-bold text-xl my-3'>Posts Data</h1>
                <div className='flex mx-2'>{posts}</div>
            </div>
        );
    }
}
