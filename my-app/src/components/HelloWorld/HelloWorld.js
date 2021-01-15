import { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <div>{this.props.text}</div>
            </div>
        );
    }
}

export default HelloWorld;
