import React, {Component} from "react";
import SingleMovie from "../components/singleMovie/SingleMovie";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class MovieList extends Component {

    componentDidMount(){
        this.props.getMdMovies();
    }
    render() {
        return <div className="row">
            <SingleMovie/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMdMovies: actions.setMdMovies,
        getMdMovies: actions.getMdMovies,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);