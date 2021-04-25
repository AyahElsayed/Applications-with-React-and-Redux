// Reducer:
// function that accepts state and action and returns a new state
import * as types from '../actions/actionTypes'

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // state.push(action.course) // don't use push 
            return [...state, { ...action.course }]
        // whatever is returned from the reducer, becomes the new state for that particular reducer
        default:
            return state
    }
}