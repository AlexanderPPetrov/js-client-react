import React from 'react';

const Item = props => {
    return <li className="list-group-item 
        d-flex justify-content-between
        align-items-center
        ">
        {props.label}
        <i 
        onClick={props.removeItem}
        className="fa
        remove-list-item 
        fa-times-circle 
        text-danger"></i>
    </li>
};

export default Item;