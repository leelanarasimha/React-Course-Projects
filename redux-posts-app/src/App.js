import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import {
    BrowserRouter,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import createPost from './pages/CreatePost/CreatePost';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAutoLogin } from './services/AuthService';

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props);
        checkAutoLogin(dispatch, props.history);
    }, []);

    return (
        <div>
            <Header />
            <div className='container px-3 mx-auto'>
                <Switch>
                    <Route path='/posts' component={Posts} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' component={Login} />
                    <Route path='/createpost' component={createPost} />
                    <Route path='/' component={Home} />
                </Switch>
            </div>
        </div>
    );
}

export default withRouter(App);
