import React, {Component} from "react";
import QuantityInput from '../components/quantityInput';
import ItemList from '../components/itemList';
import TestList from '../components/testList/testList';
class Home extends Component {

    render() {
        return <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <ItemList/>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <QuantityInput/>
                        <QuantityInput/>
                        <QuantityInput/>
                        <QuantityInput/>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <TestList/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;