import React, { Component } from "react";

class QuantityInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 5
        }
    }

    decrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1
        })
    }

    incrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    render() {
        return <div className="input-group my-2">
            <div className="input-group-prepend">
                <button 
                onClick={this.decrementQuantity}
                className="btn btn-outline-success" 
                type="button">
                    <i className="fa fa-minus"></i>
                </button>
            </div>
            <input type="text"
                readOnly
                className="form-control text-center"
                value={this.state.quantity}
            />
            <div className="input-group-append">
                <button 
                onClick={this.incrementQuantity}
                className="btn btn-outline-success"
                type="button">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>

    }
}

export default QuantityInput;