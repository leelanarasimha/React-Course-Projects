import './App.css';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className='container mx-auto'>
                <div>
                    <Route
                        path='/'
                        exact
                        render={(props) => <Home {...props} />}
                    />

                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
