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

function error(state = {}, action) {
    switch (action.type) {
        case types.SET_ERROR: {
            return {...action.payload};
        }
        default:
            return state;
    }
}


export default combineReducers({movies, error});