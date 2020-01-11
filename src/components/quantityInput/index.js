import React, { Component } from "react";

class QuantityInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 5
        }
    }

    render() {
        return <div className="input-group my-2">
            <div className="input-group-prepend">
                <button 
                className="btn btn-outline-secondary" 
                type="button">
                    Button
                </button>
            </div>
            <input type="text"
                className="form-control"
            />
            <div className="input-group-append">
                <button 
                className="btn btn-outline-secondary"
                type="button">
                    Button
                </button>
            </div>
        </div>

    }
}

export default QuantityInput;