import React from 'react';

const EmptyTable = (props) => {
    return (
        <tr>
            <td colSpan={13}>No {props.name} record found</td>

        </tr>
    )
}
export default EmptyTable