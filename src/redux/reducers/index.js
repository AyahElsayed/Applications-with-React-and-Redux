// root reducer 
// compose different reducers together

import { combineReducers } from 'redux'
import courses from './courseReducer'  // reducer we just created
// since i'm exporting default from my reducer, i can name this import whatever i like
import authors from './authorReducer'

const rootReducer = combineReducers({
    courses, // == courses: courses
    authors
})

export default rootReducer