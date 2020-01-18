import React, {Component} from "react";
import SingleMovie from "../components/singleMovie/SingleMovie";

class MovieList extends Component {

    render() {
        return <div className="row">
            <SingleMovie/>
        </div>
    }
}

export default MovieList;