import { Component } from 'react';
import AddPost from '../AddPost/AddPost';
import Dialog from '../Dialog/Dialog';
import SinglePost from '../SinglePost/SinglePost';

class Posts extends Component {
    state = {
        posts: [
            {
                id: '1',
                title: 'post 1',
                description: 'post1 description 1',
            },
            {
                id: '2',
                title: 'post 2',
                description: 'post1 description 2',
            },
            {
                id: '3',
                title: 'post 3',
                description: 'post1 description 2',
            },
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

    onchangeTitleHandler = (id, e) => {
        const postIndex = this.state.posts.findIndex(
            (post) => post.id === id,
        );
        const posts = [...this.state.posts];
        posts[postIndex].title = e.target.value;

        this.setState({
            posts,
        });
    };

    getPosts() {
        if (!this.state.showPosts) return null;

        // let posts = this.state.posts.map((post) => (
        //     <SinglePost
        //         title={post.title}
        //         description={post.description}
        //     />
        // ));

        let posts = [];

        for (let post of this.state.posts) {
            posts.push(
                <SinglePost
                    title={post.title}
                    description={post.description}
                    titleChange={this.onchangeTitleHandler.bind(
                        this,
                        post.id,
                    )}
                />,
            );
        }
        return (
            <div className='flex my-3'>
                {this.state.posts.map((post, index) => {
                    return (
                        <SinglePost
                            key={post.id}
                            title={post.title}
                            addpost={<AddPost />}
                            description={post.description}
                        >
                            <div className='my-2'>
                                <input
                                    type='text'
                                    value={post.title}
                                    onChange={this.onchangeTitleHandler.bind(
                                        this,
                                        post.id,
                                    )}
                                    className='px-5 py-1 rounded-xl border border-gray-500'
                                />
                            </div>
                        </SinglePost>
                    );
                })}
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
                {this.getPosts()}

                <div className='flex'>
                    <div className='my-5 flex-1 w-full'>
                        <AddPost />
                    </div>

                    <div className='flex-1'>
                        <Dialog>
                            <div>Showing the dialog data</div>
                        </Dialog>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;
