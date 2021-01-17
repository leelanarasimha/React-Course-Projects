import { Component } from 'react';

class SinglePost extends Component {
    render() {
        return (
            <div className='m-4 p-3 border border-gray-400 shadow'>
                <h3 className='text-xl font-bold text-blue-600'>
                    {this.props.title}
                </h3>
                <div>{this.props.description}</div>
                <div className='my-2'>
                    <input
                        type='text'
                        value={this.props.title}
                        onChange={this.props.titleChange}
                        className='px-5 py-1 rounded-xl border border-gray-500'
                    />
                </div>
            </div>
        );
    }
}

export default SinglePost;
