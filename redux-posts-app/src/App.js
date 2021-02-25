import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App() {
    return (
        <div className='container px-3 mx-auto'>
            <Header />
            <Posts />
        </div>
    );
}

export default App;
