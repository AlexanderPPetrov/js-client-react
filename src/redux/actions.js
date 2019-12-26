import types from './action-types';
import networkClient from '../network/network-client';

export function setMovies (movies) {
    return {type: types.SET_MOVIES, payload: movies}
}
export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
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