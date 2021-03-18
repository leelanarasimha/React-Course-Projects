import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import EditPost from '../../pages/EditPost/EditPost';
import SinglePost from '../../pages/SinglePost/SinglePost';

import {
    createPostAction,
    getPostsAction,
    deletePostAction,
} from '../../store/actions/PostActions';

class Posts extends Component {
    onCreatePost() {
        this.props.createPostAction();
    }

    componentDidMount() {
        if (this.props.posts && !this.props.posts.length) {
            this.props.getPostsAction();
        }
    }

    onDeletePost(postId) {
        if (window.confirm('Are you sure you want to delete post?')) {
            this.props.deletePostAction(postId, this.props.history);
        }
    }

    render() {
        const posts = [];

        for (let post of this.props.posts) {
            posts.push(
                <div key={post.id} className=' mt-3 w-1/2'>
                    <div className='shadow border p-3 mx-3'>
                        <div>{post.title}</div>
                        <div>{post.description}</div>
                        <div>
                            <Link
                                to={{ pathname: `/posts/${post.id}` }}
                                className='text-purple-500'
                            >
                                View Details
                            </Link>
                        </div>
                        <div>
                            <Link
                                to={{ pathname: `/posts/edit/${post.id}` }}
                                className='text-purple-500'
                            >
                                Edit Details
                            </Link>
                        </div>
                        <div>
                            <button
                                className='text-purple-500'
                                onClick={() => this.onDeletePost(post.id)}
                            >
                                Delete Post
                            </button>
                        </div>
                    </div>
                </div>,
            );
        }
        return (
            <div className='mt-4'>
                <div className='flex items-center justify-between my-4'>
                    <h2 className='bolder text-lg'>Posts</h2>
                    <Link
                        to='/createpost'
                        className='bg-red-300 px-3 py-2'
                    >
                        Create Post
                    </Link>
                </div>
                <hr />
                <div className='flex'>
                    <div className='flex-1'>
                        <div className='flex flex-wrap'>{posts}</div>
                    </div>
                    <div className='flex-1'>
                        {this.props.posts.length && (
                            <div>
                                <Switch>
                                    <Route
                                        path='/posts/:id'
                                        exact
                                        component={SinglePost}
                                    />
                                    <Route
                                        path='/posts/edit/:id'
                                        component={EditPost}
                                    />
                                </Switch>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { createPostAction, getPostsAction, deletePostAction },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
