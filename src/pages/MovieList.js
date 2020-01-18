import React, {Component} from "react";
import SingleMovie from "../components/singleMovie/SingleMovie";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class MovieList extends Component {

    componentDidMount(){
        this.props.getMdTopRatedMovies();
    }

    getMovieList = () => {
        const movieList = 
            this.props.movieDatabaseMovies.map( movie => {
            return <SingleMovie 
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                overview={movie.overview}
                id={movie.id}
            />        
        });
        return movieList
    }

    render() {
        return <div className="row">
            {this.getMovieList()}
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