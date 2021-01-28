import { Component } from 'react';
import UserDetails from './UserDetails';

export default class UserPropTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: 'Leela', id: 1 },
                { name: 'Leela2', id: 2 },
            ],
        };
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className='font-bold text-xl'>User Props Types</h2>
                </div>
                <div className='flex'>
                    {this.state.users.map((user) => {
                        return (
                            <UserDetails
                                name={user.name}
                                id={user.id}
                                key={user.id}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
