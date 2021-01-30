import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import { useState } from 'react';

function App() {
    const [showCounter, setShowCounter] = useState(true);
    return (
        <div className='container mx-auto'>
            <div>
                <button
                    className='bg-green-600 text-white px-3 py-1'
                    onClick={() => setShowCounter(!showCounter)}
                >
                    Toggle component
                </button>
            </div>
            {showCounter && <Counter />}
        </div>
    );
}

export default App;
