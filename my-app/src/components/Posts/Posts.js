import { Component } from 'react';
import SinglePost from '../SinglePost/SinglePost';

class Posts extends Component {
    state = {
        posts: [
            { title: 'post 1', description: 'post1 description 1' },
            { title: 'post 2', description: 'post1 description 2' },
        ],

        postTitle: 'Posts List',
        showPosts: true,
        count: false,
    };

    togglePostsHandler = () => {
        this.setState({
            showPosts: !this.state.showPosts,
        });
    };

    getPosts() {
        if (!this.state.showPosts) return null;
        return (
            <div className='flex my-3'>
                <SinglePost
                    title={this.state.posts[0].title}
                    description={this.state.posts[0].description}
                />
                <SinglePost
                    title={this.state.posts[1].title}
                    description={this.state.posts[1].description}
                />
            </div>
        );
    }

    render() {
        let posts = null;

        if (this.state.showPosts) {
            posts = (
                <div className='flex my-3'>
                    <SinglePost
                        title={this.state.posts[0].title}
                        description={this.state.posts[0].description}
                    />
                    <SinglePost
                        title={this.state.posts[1].title}
                        description={this.state.posts[1].description}
                    />
                </div>
            );
        }
        return (
            <div>
                <div>{this.state.count && 'show Count'}</div>
                <h2 className='text-2xl my-3'>{this.state.postTitle}</h2>
                <div>
                    <button
                        onClick={this.togglePostsHandler}
                        className='px-5 py-3 bg-red-500 text-white'
                    >
                        {this.state.showPosts
                            ? 'Hide Posts'
                            : 'Show Posts'}
                    </button>
                </div>
                <hr />
                {posts}
            </div>
        );
    }
}

export default Posts;
