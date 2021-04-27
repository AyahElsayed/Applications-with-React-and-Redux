// Reducer:
// function that accepts state and action and returns a new state
import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // state.push(action.course) // don't use push 
            return [...state, { ...action.course }]
        // whatever is returned from the reducer, becomes the new state for that particular reducer
        case types.LOAD_COURSES_SUCCESS:
            return action.courses
        default:
            return state
    }
}