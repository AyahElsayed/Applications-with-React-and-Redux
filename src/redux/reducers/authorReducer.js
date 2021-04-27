// Reducer:
// function that accepts state and action and returns a new state
import * as types from '../actions/actionTypes'

export default function authorReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors 
        default:
            return state
    }
}