import React, { Component } from 'react';

export function WithForwardingRef(WrappedComponent) {
    class ForwardingRef extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>
                    <div>Hoc for forwaring ref</div>
                    <WrappedComponent ref={this.props.buttonRef} />
                </div>
            );
        }
    }

    return React.forwardRef((props, ref) => {
        return <ForwardingRef buttonRef={ref} {...props} />;
    });
}
