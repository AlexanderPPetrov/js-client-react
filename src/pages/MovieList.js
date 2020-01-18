import React, {Component} from "react";
import SingleMovie from "../components/singleMovie/SingleMovie";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class MovieList extends Component {

    componentDidMount(){
        // this.props.getMdTopRatedMovies();
        this.props.getMdDiscoverMovies({
            primary_release_year: 1999
        })
    }

    getYears = () => {
        const availableYears = [];
        for(let i = 2020; i > 1999; i--){
            availableYears.push(i);
        }
        return availableYears;
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

    getAvailableReleaseYears = () => {
        
        // <option value="3">Three</option>
    }

    render() {
        return <>
            <div className="row mb-5">
                <div className="col-md-4">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text"
                         for="release-year">Release Year</label>
                    </div>
                    <select className="custom-select" id="release-year">
                        <option selected>Choose...</option>
                        {this.getAvailableReleaseYears()}
                    </select>
                    </div>
                </div>
            </div>
            <div className="row">
                {this.getMovieList()}
            </div>
        </>
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
        getMdDiscoverMovies: actions.getMdDiscoverMovies
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)(MovieList);