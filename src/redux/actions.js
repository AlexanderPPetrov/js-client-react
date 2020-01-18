import types from './action-types';
import networkClient from '../network/network-client';

export function setMovies (movies) {
    return {type: types.SET_MOVIES, payload: movies}
}
export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export function addFavoriteMovie(movie){
    return {type: types.ADD_FAVORITE_MOVIE, payload: movie};
}

export function removeFavoriteMovie(index){
    return {type: types.REMOVE_FAVORITE_MOVIE, payload: index};
}

export const getMovies = () => async dispatch => {

    try {
        const res = await networkClient.get(
            "https://facebook.github.io/react-native/movies.json");
        dispatch(setMovies(res.movies));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }

};

// Movie Database functions
export function setMdMovies (movies) {
    return {type: types.MD_SET_MOVIES, payload: movies}
}

export function setCurrentPage (page) {
    return {type: types.SET_CURRENT_PAGE, payload: page}
}

export function setTotalPages (pages) {
    return {type: types.SET_TOTAL_PAGES, payload: pages}
}

export const getMdTopRatedMovies = () => async dispatch => {
    try {
        const response = await networkClient.get(
         "movie/top_rated");
        dispatch(setMdMovies(response.results));
        dispatch(setTotalPages(response.total_pages));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const getMdDiscoverMovies = params => async dispatch => {
    try {
        const response = await networkClient.get(
         "discover/movie", params);
        dispatch(setMdMovies(response.results));
        dispatch(setTotalPages(response.total_pages));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

// Movie Database - Movie details
export function setMovieDetails (movie) {
    return {type: types.SET_MOVIE_DETAILS, payload: movie}
}

export const getMovieDetails = id => async dispatch => {
    try {
        const response = await networkClient.get(
         `movie/${id}`);
        dispatch(setMovieDetails(response));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};