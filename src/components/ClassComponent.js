import React, {Component} from "react";

class ClassComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "Class Component Title"
        }
    }
    componentDidMount(){
       this.setState({
           title: "New Title"
       }, () => {
           // Optional callback after setState
           console.log(this.state.title);
       })
    }
    render() {
        return <div className="alert alert-info">
            <i className="fa fa-cube mr-3"></i>
            {this.state.title}
        </div>
    }
}

export default ClassComponent;