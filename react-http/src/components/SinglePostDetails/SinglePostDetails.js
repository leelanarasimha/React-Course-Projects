import { Component } from 'react';

export default class SinglePostDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class='my-2 border border-gray-300 shadow p-4'>
                <div>Id: </div>
                <div>Title: </div>
                <div>Description: </div>
            </div>
        );
    }
}
