import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {
    createPostAction,
    getPostsAction,
} from '../../store/actions/PostActions';

class Posts extends Component {
    onCreatePost() {
        this.props.createPostAction();
    }

    componentDidMount() {
        this.props.getPostsAction();
    }

    render() {
        const posts = [];

        for (let post of this.props.posts) {
            posts.push(
                <div
                    key={post.id}
                    className='shadow border p-3 mx-3 mt-3 w-1/3'
                >
                    <div>{post.title}</div>
                    <div>{post.description}</div>
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
                <div className='flex'>{posts}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { createPostAction, getPostsAction },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
