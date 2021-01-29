import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import { useState } from 'react';

function App() {
    const [showCounter, setShowCounter] = useState(true);
    return (
        <div className='container mx-auto'>
            <Counter />
        </div>
    );
}

export default App;
