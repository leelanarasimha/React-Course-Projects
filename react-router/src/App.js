import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <div className='container mx-auto'>
                <Header />
                <div>
                    <Route path='/' component={Home} />
                    <Route path='/about' component={About} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
