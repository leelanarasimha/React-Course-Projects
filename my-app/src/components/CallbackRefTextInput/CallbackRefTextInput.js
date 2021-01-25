import { Component } from 'react';

export default class CallbackRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.inputRef = (el) => {
            this.textInput = el;
        };
    }

    componentDidMount() {
        // console.log(this.textInput);
        // this.textInput.focus();
        // this.textInput.value = 'Leela Web Dev';
    }

    render() {
        return (
            <div className='my-3'>
                <h2>Callback Ref Input</h2>
                <input
                    type='text'
                    className='border border-gray-500'
                    ref={this.props.inputRef}
                />
            </div>
        );
    }
}
