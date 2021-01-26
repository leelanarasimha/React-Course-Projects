import React, { Component } from 'react';
import { WithForwardingRef } from './WithForwardingRef';

class ForwardingRefButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Forwarding Ref</h2>
                <button
                    className='bg-green-600 text-white px-3 py-1'
                    ref={this.props.buttonRef}
                >
                    Click Me
                </button>
            </div>
        );
    }
}

export default WithForwardingRef(
    React.forwardRef((props, ref) => {
        return <ForwardingRefButton buttonRef={ref} {...props} />;
    }),
);
