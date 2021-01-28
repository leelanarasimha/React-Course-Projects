import { Component } from 'react';
import MouseTracker from './MouseTracker';

export default class Cat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MouseTracker
                x={(mouse) => {
                    return (
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg'
                            style={{
                                width: '200px',
                                position: 'absolute',
                                left: mouse.x,
                                top: mouse.y,
                            }}
                        />
                    );
                }}
            />
        );
    }
}
