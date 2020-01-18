import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class MovieDetails extends Component {

    componentDidMount = () => {
        const movieId = this.props.match.params.id;

        console.log('Movie id', movieId);
    }
    render() {
        return <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        Movie Details
                    </div>
                </div>
            </div>
        </div>
    }
}


// 1. Rafactor MovieDetails component to be a 
// redux connected component

// 2. Create MovieDetails? reducer

// 3. Render movie title in MovieDetails
export default withRouter(MovieDetails);