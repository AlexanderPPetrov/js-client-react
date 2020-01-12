import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";
class FavoriteMovies extends Component {

   
    getFavoriteMovies = () => {
        //TODO 
        // this.props.favoriteMovies.map......
        return null;
    }
    render() {
        return <div>
            {this.getFavoriteMovies()}
        </div>
    }
}
const mapStateToProps = state => {
    return {
        favoriteMovies: state.favoriteMovies
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        addFavoriteMovie: actions.addFavoriteMovie,
        removeFavoriteMovie: actions.removeFavoriteMovie
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(FavoriteMovies);