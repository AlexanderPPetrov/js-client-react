import React, {Component} from "react";
import SingleMovie from "../components/singleMovie/SingleMovie";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class MovieList extends Component {

    componentDidMount(){
        this.props.getMdTopRatedMovies();
    }
    // this.props.movieDatabaseMovies
    //TODO 
    // 1. write a function that will return component SingleMovie for each
    // element in this.props.movieDatabaseMovies

    render() {
        return <div className="row">
            <SingleMovie/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        movieDatabaseMovies: state.movieDatabaseMovies,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMdMovies: actions.setMdMovies,
        getMdTopRatedMovies: actions.getMdTopRatedMovies,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);