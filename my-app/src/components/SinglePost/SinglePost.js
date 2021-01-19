import { Component } from 'react';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        console.log('[single post] constructor called');
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[single post] get derived called');
    //     return state;
    // }
    render() {
        console.log('[single post] render called');
        return (
            <div className='m-4 p-3 border border-gray-400 shadow'>
                <h3 className='text-xl font-bold text-blue-600'>
                    {this.props.title}
                </h3>
                <div>{this.props.description}</div>
                <div>{this.props.children}</div>
            </div>
        );
    }

    componentDidMount() {
        console.log('[single post] component did mount called');
    }
}

export default SinglePost;
