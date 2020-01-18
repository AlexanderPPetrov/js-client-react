import React, {Component} from "react";

class SingleMovie extends Component {

    render() {
        return <div className="col-md-6">
                <div className="d-flex
                flex-md-row
                flex-column
                border shadow-sm mb-3 bg-white rounded
                single-movie
                ">
                    <img className="movie-image" 
                    src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/fn5hrKQNVv3NsXim3pHN0ZztPj5.jpg"/>
                    <div className="p-3 d-flex flex-column">
                        <div className="pb-3">
                            <h4>Movie title</h4>
                            <p>2939.20203.2</p>
                            <div className="mt-3 movie-description">
                                Сюжетът разказва историята на Рой МакБрайд – космически инженер. Бащата на МакБрайд е изчезнал безследно преди 20 год., по време на космическа експедиция към Не…
                            </div>
                        </div>
                        <div className="mt-auto border-top pt-3">
                            <button type="button" 
                            className="btn btn-link">
                                Повече Информация
                            </button>
                        </div> 
                    </div>
                </div>
        </div>
    }
}

export default SingleMovie;