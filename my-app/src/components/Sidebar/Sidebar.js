import { Component } from 'react';
import ButtonContext from '../../Context/ButtonContext';
import Navigation from '../Navigation/Navigation';

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
            </div>
        );
    }
}
