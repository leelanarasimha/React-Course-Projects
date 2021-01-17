import { Component } from 'react';

class Dialog extends Component {
    render() {
        return (
            <div>
                <div>Dialog data</div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Dialog;
