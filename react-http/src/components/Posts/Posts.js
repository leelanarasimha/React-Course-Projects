import { Component } from 'react';
import { Post } from '../Post/Post';
import axios from 'axios';

export default class Posts extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get(
                `https://react-course-b798e-default-rtdb.firebaseio.com/posts.json`,
            )
            .then((response) => {
                console.log(response.data);
            });
    }

    render() {
        return (
            <div>
                <h1 className='font-bold text-xl my-3'>Posts Data</h1>

                <div>
                    <Post />
                </div>
            </div>
        );
    }
}
