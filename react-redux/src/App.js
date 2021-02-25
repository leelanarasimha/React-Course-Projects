import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import { CounterFunction } from './components/Counter/CounterFunction';

function App() {
    return (
        <div className='App'>
            <Counter />
            <br />
            <br />
            <br />
            <br />
            <CounterFunction />
        </div>
    );
}

export default App;
