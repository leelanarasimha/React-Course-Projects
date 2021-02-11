import './App.css';
import {
    BrowserRouter,
    Route,
    HashRouter,
    Switch,
} from 'react-router-dom';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Contact } from './components/Contact/Contact';
import { Posts } from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className='container mx-auto'>
                <div>
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/posts' component={Posts} />

                        <Route
                            path='/'
                            render={(props) => <Home {...props} />}
                        />
                    </Switch>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
