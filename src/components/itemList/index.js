import React, { Component } from "react";

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemLabel: '',
            itemList: []
        }
    }

    addItem = () => {
        if (!this.state.itemLabel) {
            return;
        }
        const item = {
            label: this.state.itemLabel
        }
        let itemList = this.state.itemList;
        itemList.push(item);

        this.setState({
            itemList,
            itemLabel: ''
        }, ()=> {
            console.log(this.state.itemList)
        })
        
    }

    handleChange = e => {
        this.setState({
            itemLabel: e.target.value
        });
    }
    render() {
        return <div>
            <div className="input-group my-2">
                <input type="text"
                    className="form-control"
                    value={this.state.itemLabel}
                    onChange={this.handleChange}
                />
                <div className="input-group-append">
                    <button
                        onClick={this.addItem}
                        className="btn btn-outline-success"
                        type="button">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
            <ul className="list-group mt-3">
                <li className="list-group-item">Cras justo odio</li>
            </ul>
        </div>

    }
}

export default ItemList;