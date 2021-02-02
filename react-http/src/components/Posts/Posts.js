import { Component } from 'react';
import { Post } from '../Post/Post';
import axios from 'axios';
import SinglePostDetails from '../SinglePostDetails/SinglePostDetails';
import { FunctionalSinglePostDetails } from '../FunctionalSinglePostDetails/FunctionalSinglePostDetails';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            selectedPostId: null,
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

    onPostClickHandler = (id) => {
        this.setState({
            selectedPostId: id,
        });
    };

    render() {
        const posts = this.state.posts.map((post) => {
            return (
                <Post
                    key={post.id}
                    post={post}
                    postclicked={this.onPostClickHandler.bind(
                        this,
                        post.id,
                    )}
                />
            );
        });
        return (
            <div>
                <div className='flex'>
                    <div className='w-3/4'>
                        <h1 className='font-bold text-xl my-3'>
                            Posts Data
                        </h1>
                        <div className='flex mx-2'>{posts}</div>
                    </div>
                    {this.state.selectedPostId && (
                        <div className='w-1/4'>
                            <h2 className='font-bold text-2xl'>
                                Post details
                            </h2>
                            <FunctionalSinglePostDetails
                                id={this.state.selectedPostId}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
