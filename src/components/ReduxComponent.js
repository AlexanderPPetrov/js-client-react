import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
class TestComponent extends Component {

    componentDidMount() {
        this.props.getMovies();
    }

    getMovieList = () => {
        const movieList = this.props.movies.map((movie, index) => {
            return <li key={movie.id} className="list-group-item">
                {movie.title}
            </li>
        })
        return movieList;
    }
    render() {
        return <ul className="list-group">
            {this.getMovieList()}
        </ul>
    }
}
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};


const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMovies: actions.setMovies,
        getMovies: actions.getMovies
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(TestComponent);