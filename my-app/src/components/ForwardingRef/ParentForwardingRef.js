import React, { Component } from 'react';
import ForwardingRefButton from './ForwardingRefButton';

export default class ParentForwardingRef extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.buttonRef);
        this.buttonRef.current.innerHTML = 'Leela Web Dev';
    }
    render() {
        return (
            <div>
                <ForwardingRefButton ref={this.buttonRef} />
            </div>
        );
    }
}
