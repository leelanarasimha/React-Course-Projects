import { Component } from 'react';
import ButtonContext from '../../Context/ButtonContext';
import Navigation from '../Navigation/Navigation';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <ButtonContext.Provider value='Navigation context value'>
                    <Navigation />
                </ButtonContext.Provider>
            </div>
        );
    }
}
