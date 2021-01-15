import { Component } from 'react';
import SinglePost from '../SinglePost/SinglePost';

class Posts extends Component {
    state = {
        posts: [
            { title: 'post 1', description: 'post1 description 1' },
            { title: 'post 2', description: 'post1 description 2' },
        ],

        postTitle: 'Posts List',
    };

    updateTitleHandler(title, e) {
        e.preventDefault();
        console.log('updatin title');
        console.log(this);
        this.setState({
            postTitle: title,
        });
    }

    titleHandler = (title, e) => {
        e.preventDefault();
        console.log('updatin title via pro[erty function');
        console.log(this);
        this.setState({
            postTitle: title,
        });
    };

    render() {
        return (
            <div>
                <h2 className='text-2xl my-3'>{this.state.postTitle}</h2>
                <div>
                    <a
                        href='http://www.google.com'
                        onClick={this.titleHandler.bind(
                            this,
                            'Leela Web Dev',
                        )}
                        className='px-5 py-2 bg-red-500 rounded-3xl text-white'
                    >
                        Update with property
                    </a>
                    <a
                        href='http://www.google.com'
                        onClick={this.updateTitleHandler.bind(
                            this,
                            'Modfied',
                        )}
                        className='px-5 py-2 bg-red-500 rounded-3xl text-white'
                    >
                        Update via method
                    </a>
                </div>
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
