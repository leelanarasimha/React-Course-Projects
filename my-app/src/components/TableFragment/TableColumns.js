import React from 'react';
export function TableColumns(props) {
    return (
        <React.Fragment>
            <td className='border border-green-500'>{props.user.id}</td>
            <td className='border border-green-500'>{props.user.name}</td>
        </React.Fragment>
    );
}
