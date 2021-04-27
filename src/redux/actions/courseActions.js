import * as types from './actionTypes'
import * as courseApi from '../../api/courseApi'

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course } // this object is an "action" 
    // so the function is called the "action creator"
}

// First thunk

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses }
}
export function loadCourses() {
    return function (dispatch) {
        return courseApi.getCourses().then(courses => {
            dispatch(loadCourseSuccess(courses))
        })
            .catch(error => {
                throw error
            })
    }
}