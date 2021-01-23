import './App.css';
import Posts from './components/Posts/Posts';
import Sidebar from './components/Sidebar/Sidebar';
import ButtonContext from './Context/ButtonContext';

function App() {
    return (
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='w-1/5'>
                    <ButtonContext.Provider value='Leela Web Dev Context'>
                        <Sidebar />
                    </ButtonContext.Provider>
                </div>
                <div className='w-4/5'>
                    <Posts />
                </div>
            </div>
        </div>
    );
}

export default App;
