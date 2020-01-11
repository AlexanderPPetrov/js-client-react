import React, {Component} from "react";
import QuantityInput from '../components/quantityInput';

class Home extends Component {

    render() {
        return <div className="row">
            <div className="col-md-8"></div>
            <div className="col">
                <QuantityInput/>
            </div>
        </div>
    }
}

export default Home;