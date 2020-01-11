import React from 'react';

const FunctionalComponent = props => {
    return <div className="alert alert-secondary">
        <i className="fa fa-cube mr-3"></i>
        {props.title} {props.description}
    </div>
};

export default FunctionalComponent;