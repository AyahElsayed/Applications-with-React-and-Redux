import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import propTypes from 'prop-types'
import { bindActionCreators } from 'redux'

class CoursesPage extends React.Component {
  
  // handleChange = (event) => {
  //   const course = { ...this.state.course, title: event.target.value }
  //   console.log(course)
  //   this.setState({ course })
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.actions.createCourse(this.state.course)
  // }

  render() {
    return (
      <div>
       
          <h2>Courses</h2>
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </div>
    )
  }
}
CoursesPage.propTypes = {
  actions: propTypes.object.isRequired,
  courses: propTypes.array.isRequired
}

function mapStateToProps(state) {
  // determine what state to pass
  // ownProps => second parameter - this parameter lets us access props that are being attached to this component 
  // will used later
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
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
