import React, {Component} from "react";
import QuantityInput from '../components/quantityInput';
import ItemList from '../components/itemList';

class Home extends Component {

    render() {
        return <div className="row">
            <div className="col-md-4">
                <ItemList/>
            </div>
            <div className="col-md-4">
                <QuantityInput/>
                <QuantityInput/>
                <QuantityInput/>
                <QuantityInput/>
            </div>
        </div>
    }
}

export default Home;