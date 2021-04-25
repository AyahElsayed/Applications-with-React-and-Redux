// Reducer:
// function that accepts state and action and returns a new state

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case "CREATE_COURSE":
            // state.push(action.course) // don't use push 
            return [...state, { ...action.course }]
        // whatever is returned from the reducer, becomes the new state for that particular reducer
        default:
            return state
    }
}