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

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[single post] should component update fired');
        return true;
    }

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

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[single post] get snapshot fired');
        return 10;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot);
        console.log('[single post] component did update fired');
    }

    componentDidMount() {
        console.log('[single post] component did mount called');
    }

    componentWillUnmount() {
        console.log('[single post] component unmount called');
    }
}

export default SinglePost;
