const { Component } = require('react');
const { default: SinglePost } = require('../SinglePost/SinglePost');

class Posts extends Component {
    state = {
        posts: [
            { title: 'post 1', description: 'post1 description 1' },
            { title: 'post 2', description: 'post1 description 2' },
        ],

        postTitle: 'Posts List',
    };
    render() {
        return (
            <div>
                <h2 className='text-2xl my-3'>{this.state.postTitle}</h2>
                <hr />
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
            </div>
        );
    }
}

export default Posts;
