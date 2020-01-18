import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

class MovieDetails extends Component {

    componentDidMount = () => {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetails(movieId);
    }
    render() {
        return <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        {this.props.movieDetails.title}
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        movieDetails: state.movieDetails,
    }
};

const mapStateToDispatch = dispatch => {
    return bindActionCreators({
        setMovieDetails: actions.setMovieDetails,
        getMovieDetails: actions.getMovieDetails,
    }, dispatch)
};

export default connect(mapStateToProps, mapStateToDispatch)
        (withRouter(MovieDetails));
