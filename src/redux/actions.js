import types from './action-types';
import networkClient from '../network/network-client';
import graphQLService from '../network/graphql-service';

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

// ---------------------


export const getGames = (responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.getGames(responseFields);
        dispatch(setGames(response.data.games));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function setGames (games) {
    return {type: types.SET_GAMES, payload: games}
}

export function addGameToStore (game) {
    return {type: types.ADD_GAME, payload: game}
}

export const addGame = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.addGame(variables, responseFields);
        dispatch(addGameToStore(response.data.addGame));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const addUser = variables => async dispatch => {
    try {
        const response = await graphQLService.addUser(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.addUser));
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "addUser", errors: []}))
    }
}


export const editUser = (variables, responseFields = "_id firstName lastName email userType games {name}") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(getCurrentUser());
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "editUser", errors: []}))
    }
}

export const login = variables => async dispatch => {
    try {
        const response = await graphQLService.login(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.login));
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "login", errors: []}))
    }
}
export function saveToken(token){
    return {type: types.SAVE_TOKEN, payload: token}
}

export function setGraphQLError (error) {
    return { type: types.ADD_GRAPHQL_ERROR, payload: error };
}

export const getCurrentUser = () => async dispatch => {
    try {
        const response = await graphQLService.currentUser();
        dispatch(saveCurrentUser(response.data.currentUser));
    } catch(e){
        dispatch(saveToken(''));
    }
}

export function saveCurrentUser(user){
    return {type: types.SET_USER, payload: user}
}

export const deleteGame = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteGame(variables, responseFields);
        dispatch(deleteGameFromStore(response.data.deleteGame._id));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function deleteGameFromStore (game) {
    return {type: types.DELETE_GAME, payload: game}
}

export const addGameToUser = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(saveCurrentUser(response.data.editUser));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

//---------------------



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