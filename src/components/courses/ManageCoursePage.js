import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { loadCourses, saveCourse } from '../../redux/actions/courseActions'
import { loadAuthors } from '../../redux/actions/authorActions'
import propTypes from 'prop-types'
import CourseForm from './CourseForm'
import { newCourse } from '../../../tools/mockData'

function ManageCoursePage({ courses, authors, loadCourses, loadAuthors, saveCourse, history, ...props }) {
    const [course, setCourse] = useState({ ...props.course })
    const [errors, setErrors] = useState({})
    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(error => {
                alert("Loading courses failed" + error);
            });
        }
        else {
            setCourse({...props.course})
        }
        if (authors.length === 0) {
            loadAuthors().catch(error => {
                alert("Loading authors failed" + error);
            });
        }
    }, [props.course])

    function handleChange(event) {
        const { name, value } = event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value
        }));
    }

    function handleSave(event) {
        event.preventDefault();
        saveCourse(course).then(() => {
            history.push("/courses"); // manage Redirect
        });
    }

    return (
        <div>
            <CourseForm
                course={course}
                errors={errors}
                authors={authors}
                onChange={handleChange}
                onSave={handleSave}
            />
        </div>
    )
}
ManageCoursePage.propTypes = {
    course: propTypes.object.isRequired,
    history: propTypes.object.isRequired,
    authors: propTypes.array.isRequired,
    courses: propTypes.array.isRequired,
    loadCourses: propTypes.func.isRequired,
    loadAuthors: propTypes.func.isRequired,
    saveCourse: propTypes.func.isRequired
}

export function getCourseBySlug(courses, slug) {
    return courses.find(course => course.slug === slug) || null;
  }

function mapStateToProps(state, ownProps) {
    // determine what state to pass
    // ownProps => second parameter - this parameter lets us access props that are being attached to this component 
    const slug = ownProps.match.params.slug
    const course = slug ? getCourseBySlug(state.courses, slug) : newCourse
    return {
        course,
        courses: state.courses,
        authors: state.authors
    }
}

const mapDispatchToProps = {
    loadCourses,
    loadAuthors,
    saveCourse
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
