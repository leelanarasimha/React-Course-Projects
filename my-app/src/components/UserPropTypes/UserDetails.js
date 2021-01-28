import { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='border border-gray-500 shadow p-4 mx-2'>
                <div>Name: {this.props.name}</div>
                <div>Id: {this.props.id}</div>
            </div>
        );
    }
}

UserDetails.defaultProps = {
    name: 'Hai Leela',
};

UserDetails.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number.isRequired,
};
