import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
class ReduxComponent extends Component {

    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        return <div className="alert alert-success">
            <i className="fa fa-cube mr-3"></i>Redux Component Example
        </div>
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

export default connect(mapStateToProps, mapStateToDispatch)(ReduxComponent);