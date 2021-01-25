import React, { Component } from 'react';
import RefTextInput from './RefTextInput';

export default class ParentRefTextInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    componentDidMount() {
        this.componentRef.current.focusInput('calling from parent');
    }

    render() {
        return (
            <div>
                <RefTextInput ref={this.componentRef} />
            </div>
        );
    }
}
