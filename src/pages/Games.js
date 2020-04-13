import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import AddGame from '../components/AddGame';
import Game from '../components/games/Game';

class Games extends Component {

    componentDidMount(){
        this.props.getGames('_id name description imageUrl price');
    }
    renderGames = () => {
      //TODO refactor to a functional component
        const gamesList = this.props.games.map(game => {
            return <Game key={game._id} game={game}/>
        })
        return gamesList;
    }
    render() {
        return <div className="row">
            <div className="col-md-3">
                <AddGame/>
            </div>
            <div className="col">
                <div className="row">
                    {this.renderGames()}
                </div>
            </div>
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