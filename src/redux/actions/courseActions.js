import * as types from './actionTypes'
import * as courseApi from '../../api/courseApi'

// First thunk

// "action creator fuction"
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

// "action creator fuctions"
export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

// Second thunk
export function saveCourse(course) {
    //getState lets us access the Redux store data
    // eslint-disable-next-line no-unused-vars
    return function (dispatch, getState) {
        return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                course.id
                    ? dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                throw error;
            });
    };
}