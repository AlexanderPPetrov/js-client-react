import React, {Component} from "react";
import FavoriteMovies from "../components/favoriteMovies";

class Favorite extends Component {

    render() {
        return <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <FavoriteMovies/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Favorite;