import './App.css';
import Button from './components/Button/Button';
import HelloWorld from './components/HelloWorld/HelloWorld';

function App() {
    return (
        <div className='container mx-auto'>
            <Button name='First Button' text='dsdsds' />
            <Button name='Second Button' />

            <HelloWorld text='Hello World Good Morning' />
            <HelloWorld text='Hello World Welcome Leela Web Dev' />
        </div>
    );
}

export default App;
