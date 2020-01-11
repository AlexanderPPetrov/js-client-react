import React from 'react';

const Item = props => {
    return <li className="list-group-item">
        {props.label}
    </li>
};

export default Item;