import React, { Component } from 'react';
export default class RefTextInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = (value) => {
        console.log(this.inputRef.current);
        this.inputRef.current.focus();
        this.inputRef.current.value = value;
    };
    render() {
        return (
            <div className='my-3'>
                <h2>ref Text INput</h2>
                <div>
                    <input
                        type='text'
                        ref={this.inputRef}
                        className='border border-gray-500'
                    />
                </div>

                <div className='my-3'>
                    <button
                        className='bg-red-500 text-white px-2 py-1'
                        onClick={this.focusInput.bind(
                            this,
                            'calling from child',
                        )}
                    >
                        Focus Input
                    </button>
                </div>
            </div>
        );
    }
}
