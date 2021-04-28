import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { loadCourses } from '../../redux/actions/courseActions'
import { loadAuthors } from '../../redux/actions/authorActions'
import propTypes from 'prop-types'
import CourseForm from './CourseForm'
import { newCourse } from '../../../tools/mockData'

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors, ...props }) {
    const [course, setCourse] = useState({ ...props.course })
    const [errors, setErrors] = useState({})
    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
        }
        if (authors.length === 0) {
            loadAuthors().catch(error => {
                alert("Loading authors failed" + error);
            });
        }
    }, [])

    function handleChange(event) {
        const { name, value } = event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }));
    }
    return (
        <div>
            <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} />
        </div>
    )
}
ManageCoursePage.propTypes = {
    course: propTypes.object.isRequired,
    authors: propTypes.array.isRequired,
    courses: propTypes.array.isRequired,
    loadCourses: propTypes.func.isRequired,
    loadAuthors: propTypes.func.isRequired
}

function mapStateToProps(state) {
    // determine what state to pass
    // ownProps => second parameter - this parameter lets us access props that are being attached to this component 
    // will used later
    return {
        course: newCourse,
        courses: state.courses,
        authors: state.authors
    }
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors
}
/*
another way to handle mapDispatchToProps (preferred)
const mapDispatchToProps = {
    createCourse: courseActions.createCourse
  }
// when declared as an object, each property is automatically bound to dispatch
*/
/*
mapDispatchToProps
  lets us declare what actions to pass to our component
  optional parameter
  when we omit it, our component gets a dispatch prop injected automatically 
  so we can use it to dispatch our actions
*/
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
