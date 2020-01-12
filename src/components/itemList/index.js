import React, {Component} from "react";
import Item from './item';

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemLabel: '',
            search: '',
            itemList: [],
            filteredList: []
        }
    }

    handleSearchChange = e => {
        const search = e.target.value;
    
        let filteredList = this.state.itemList;

        if(search){
            filteredList = filteredList.filter( item => {
                return item.label.indexOf(search) != -1
            })
        }
        this.setState({
            search,
            filteredList
        })

       
    }

    handleKeyPress = e => {
        if(e.key === 'Enter'){
            this.addItem();
        }
    }

    addItem = () => {
        if (!this.state.itemLabel) {
            return;
        }
        let itemList = this.state.itemList;

        itemList.push({
            label: this.state.itemLabel
        });

        this.setState({
            itemList,
            itemLabel: ''
        })

        console.log(itemList);

    }

    removeItem = index => {
        let itemList = this.state.itemList;
        itemList.splice(index, 1);
        this.setState({
            itemList
        })
    }

    handleChange = e => {
        this.setState({
            itemLabel: e.target.value
        });
    }
    getListItems = () => {

        let items = this.state.itemList;
        if(this.state.search){
            items = this.state.filteredList;
        }

        if (!items.length) {
            return <div className="alert alert-warning">
                Няма нищо добавено
            </div>
        }
        return items.map((item, index) => {
            return <Item 
            key={index}
            removeItem={()=> this.removeItem(index)} 
            label={item.label}/>
        })


    }

    render() {
        return <>
            <div className="input-group mb-2">
                <input type="text"
                       className="form-control"
                       onKeyPress={this.handleKeyPress} 
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
            <div className="input-group mb-2">
                <input type="text"
                    className="form-control"
                    value={this.state.search}
                    onChange={this.handleSearchChange}
                />
            </div>
            <ul className="list-group mt-3">
                {this.getListItems()}
            </ul>
        </>

    }
}

export default ItemList;