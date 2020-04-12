import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";

class Games extends Component {

    componentDidMount(){
        this.props.getGames('_id name description imageUrl price');
    }
    renderGames = () => {
     
        const gamesList = this.props.games.map(game => {
            return <div className="col-md-3">
                <div key={game._id} className="card">
            <img src={game.imageUrl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text">{game.description}</p>
            </div>
          </div>
            </div>
        })
        return gamesList;
    }
    render() {
        return <div className="row">
            {this.renderGames()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        games: state.games
    }
}

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        getGames: actions.getGames
    }, dispatch)
}

export default connect(mapStateToProps, mapStateToDispatch)(Games);