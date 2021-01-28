import './App.css';
import CallbackRefTextInput from './components/CallbackRefTextInput/CallbackRefTextInput';
import ParentCallbackRefTextInput from './components/CallbackRefTextInput/ParentCallbackRefTextInput';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import ParentForwardingRef from './components/ForwardingRef/ParentForwardingRef';
import Cat from './components/MouseTracker/Cat';
import MouseTracker from './components/MouseTracker/MouseTracker';
import MouseWithCat from './components/MouseTracker/MouseWithCat';
import Navigation from './components/Navigation/Navigation';
import Posts from './components/Posts/Posts';
import ParentRefTextInput from './components/RefTextInput/ParentRefTextInput';
import RefTextInput from './components/RefTextInput/RefTextInput';
import Sidebar from './components/Sidebar/Sidebar';
import TableFragment from './components/TableFragment/TableFragment';
import UserPropTypes from './components/UserPropTypes/UserPropTypes';
import ButtonContext from './Context/ButtonContext';
import UserContext from './Context/UserContext';

function App() {
    let userData = {
        name: 'Leela',
        greet: function () {
            return 'Hello ' + this.name;
        },
    };
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex'>
                    <div className='w-1/5'>
                        <ErrorBoundary>
                            <ButtonContext.Provider value='Leela Web Dev'>
                                <UserContext.Provider value={userData}>
                                    <Sidebar />
                                </UserContext.Provider>
                            </ButtonContext.Provider>
                        </ErrorBoundary>
                    </div>
                    <div className='w-4/5'>
                        {/* <div>
                            <UserPropTypes />
                        </div> */}
                        <div>
                            <TableFragment />
                        </div>
                        <div>
                            <ParentForwardingRef />
                        </div>
                        <div>
                            <ParentRefTextInput />
                        </div>
                        <div>
                            <ParentCallbackRefTextInput />
                        </div>
                        {/* <div>
                        <Posts />
                    </div> */}
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <Cat />
            </div>
        </div>
    );
}

export default App;
