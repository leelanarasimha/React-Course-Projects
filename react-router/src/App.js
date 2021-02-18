import './App.css';
import {
    BrowserRouter,
    Route,
    HashRouter,
    Switch,
    Redirect,
} from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { lazy, Suspense } from 'react';

const About = lazy(() =>
    import(/* webpackChunkName: "About" */ './components/About/About'),
);

const Contact = lazy(() =>
    import(
        /* webpackChunkName: "Contact" */ './components/Contact/Contact'
    ),
);
const Posts = lazy(() => import('./components/Posts/Posts'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

function App() {
    let isAuthenticate = true;
    return (
        <BrowserRouter>
            <Header />
            <div className='container mx-auto'>
                <div>
                    <Suspense fallback={<div>Loading....</div>}>
                        <Switch>
                            {isAuthenticate && (
                                <Route path='/about' component={About} />
                            )}

                            <Route path='/contact' component={Contact} />
                            <Route path='/posts' component={Posts} />

                            <Redirect from='/' to='/posts' exact />
                            <Route path='*' component={NotFound} />
                        </Switch>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
