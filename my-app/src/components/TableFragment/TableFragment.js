import React, { Component } from 'react';
import { TableColumns } from './TableColumns';

export default class TableFragment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'Leela' },
                { id: 2, name: 'Leela Web Dev' },
                { id: 3, name: 'Leela2' },
            ],
        };
    }

    render() {
        return (
            <div className='my-3'>
                <h2>Table Fragment Date</h2>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='border border-green-500'>Id</th>
                            <th className='border border-green-500'>
                                User
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) => {
                            return (
                                <React.Fragment key={user.id}>
                                    <tr>
                                        <TableColumns user={user} />
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
