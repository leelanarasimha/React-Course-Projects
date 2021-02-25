import { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
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
            <div>
                <h2 className='bolder text-lg'>Posts</h2>
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

export default connect(mapStateToProps)(Posts);
