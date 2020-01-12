import React, {Component} from "react";

class TestList extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    label: "tralala"
                },
                {
                    label: "asd"
                },
                {
                    label: "tralala 2"
                }
            ]
        }
    }
    getListItems = () => {
        return this.state.items.map((element, index) =>{
            return <div key={index}>{element.label}</div>
        })
    }
    render() {
        return <div className="alert alert-info">
            <i className="fa fa-cube mr-3"></i>
            {this.getListItems()}
        </div>
    }
}

export default TestList;