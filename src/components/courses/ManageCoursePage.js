import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import * as authorActions from '../../redux/actions/authorActions'
import propTypes from 'prop-types'
import { bindActionCreators } from 'redux'

class ManageCoursePage extends React.Component {
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

        <h2>Manage Course</h2>
      </div>
    )
  }
}
ManageCoursePage.propTypes = {
  authors: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
  courses: propTypes.array.isRequired
}

function mapStateToProps(state) {
  // determine what state to pass
  // ownProps => second parameter - this parameter lets us access props that are being attached to this component 
  // will used later
  return {
    courses:state.courses,
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
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
