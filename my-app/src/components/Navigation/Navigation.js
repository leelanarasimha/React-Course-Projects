import { Component } from 'react';
import ButtonContext from '../../Context/ButtonContext';
import UserContext from '../../Context/UserContext';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ButtonContext.Consumer>
                    {(value) => {
                        return (
                            <div>
                                <a href='#'>{value}</a>
                                <UserContext.Consumer>
                                    {(userValue) => {
                                        return (
                                            <div>{userValue.gret()}</div>
                                        );
                                    }}
                                </UserContext.Consumer>
                            </div>
                        );
                    }}
                </ButtonContext.Consumer>
            </div>
        );
    }
}
