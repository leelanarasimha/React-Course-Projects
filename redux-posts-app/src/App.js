import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
    withRouter,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import createPost from './pages/CreatePost/CreatePost';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';

function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props);
        checkAutoLogin(dispatch, props.history);
    }, []);

    let routes = (
        <Switch>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/' component={Home} />
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path='/posts' component={Posts} />
                <Route path='/createpost' component={createPost} />
                <Route path='/' component={Home} exact />
                <Redirect to='/' />
            </Switch>
        );
    }

    return (
        <div>
            <Header />
            <div className='container px-3 mx-auto'>{routes}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App));
