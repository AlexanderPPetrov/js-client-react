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
                className="btn btn-outline-success" 
                type="button">
                    <i className="fa fa-minus"></i>
                </button>
            </div>
            <input type="text"
                className="form-control text-center"
                value={this.state.quantity}
            />
            <div className="input-group-append">
                <button 
                className="btn btn-outline-success"
                type="button">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>

    }
}

export default QuantityInput;