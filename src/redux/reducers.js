import {combineReducers} from "redux";
import types from "./action-types";

function movies(state = [], action) {
    switch (action.type) {
        case types.SET_MOVIES: {
            return [...action.payload];
        }
        default:
            return state;
    }
}

function games(state = [], action) {
    switch (action.type) {
        case types.SET_GAMES: {
            return [...action.payload];
        }
        case types.ADD_GAME: {
            const currentGames = state.slice();
            currentGames.push(action.payload);
            return [...currentGames];
        }
        case types.DELETE_GAME: {
            return state.filter(item => item._id !== action.payload)
        }
        default:
            return state;
    }
}


function favoriteMovies(state=[], action){
    switch (action.type) {
        case types.ADD_FAVORITE_MOVIE: {
            return [...state, action.payload];
        }
        case types.REMOVE_FAVORITE_MOVIE: {
            state.splice(action.payload, 1)
            return [...state];
        }
        default:
            return state;
    }
}

function error(state = {}, action) {
    switch (action.type) {
        case types.SET_ERROR: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

function userLoaded(state = false, action) {
    switch (action.type) {
        case types.SET_USER_LOADED: {
            return action.payload;
        }
        default:
            return state;
    }
}
function currentUser(state = {}, action) {
    switch (action.type) {
        case types.SET_USER: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

function token(state = localStorage.getItem('token') ? localStorage.getItem('token') : '', action) {
    switch (action.type) {
        case types.SAVE_TOKEN: {
            localStorage.setItem('token', action.payload);
            return action.payload
        }
        default:
            return state;
    }
}


function graphQLErrors(state = [], action) {
    switch (action.type) {
        case types.ADD_GRAPHQL_ERROR: {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}

// The Movie Database connected data

function movieDatabaseMovies(state = [], action) {
    switch (action.type) {
        case types.MD_SET_MOVIES: {
            return [...action.payload];
        }

        default:
            return state;
    }
}

function movieDetails(state = {}, action) {
    switch (action.type) {
        case types.SET_MOVIE_DETAILS: {
            return {...action.payload};
        }

        default:
            return state;
    }
}

function currentPage(state = 1, action) {
    switch (action.type) {
        case types.SET_CURRENT_PAGE: {
            return action.payload;
        }
        default:
            return state;
    }
}

function totalPages(state = 0, action) {
    switch (action.type) {
        case types.SET_TOTAL_PAGES: {
            return action.payload;
        }
        default:
            return state;
    }
}


export default combineReducers({
    movies,
    games,
    favoriteMovies, 
    error, 
    movieDatabaseMovies, 
    movieDetails,
    currentPage,
    totalPages,
    token,
    graphQLErrors,
    currentUser,
    userLoaded,
});