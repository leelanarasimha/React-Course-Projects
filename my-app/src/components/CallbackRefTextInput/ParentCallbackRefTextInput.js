import { Component } from 'react';
import CallbackRefTextInput from './CallbackRefTextInput';

export default class ParentCallbackRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.textInput = null;
    }

    componentDidMount() {
        this.textInput.focus();
        this.textInput.value = 'Leela Web Dev from parent';
    }

    render() {
        return (
            <div>
                <CallbackRefTextInput
                    inputRef={(el) => (this.textInput = el)}
                />
            </div>
        );
    }
}
