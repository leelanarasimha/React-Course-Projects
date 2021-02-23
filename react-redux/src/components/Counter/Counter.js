import { Component } from 'react';
import { decrement, increment } from '../../Store/actions/CounterActions';
import { store } from '../../Store/store';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        this.updateCounter();
        store.subscribe(this.updateCounter.bind(this));
    }

    updateCounter() {
        const state = store.getState();
        this.setState({
            counter: state.counter,
        });
    }

    onIncrement() {
        store.dispatch(increment());
    }

    onDecrement() {
        store.dispatch(decrement());
    }

    render() {
        return (
            <div>
                <div>Counter Component</div>
                <div>{this.state.counter}</div>
                <div>
                    <button onClick={this.onIncrement}>Increment</button>
                    <button onClick={this.onDecrement}>Decrement</button>
                </div>
            </div>
        );
    }
}
