import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import * as authorActions from '../../redux/actions/authorActions'
import propTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import CourseList from "./CourseList";
import { Redirect } from 'react-router-dom'


class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) { // this condition to render one time
      actions.loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </div>
    )
  }
}
CoursesPage.propTypes = {
  authors: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
  courses: propTypes.array.isRequired
}

function mapStateToProps(state) {
  // determine what state to pass
  // ownProps => second parameter - this parameter lets us access props that are being attached to this component 
  // will used later
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
          return {
            ...course,
            authorName: state.authors.find(a => a.id === course.authorId).name
          };
        }),
    authors: state.authors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  }
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
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
