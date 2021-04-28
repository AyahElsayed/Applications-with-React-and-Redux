import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import CoursesPage from './courses/CoursesPage';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';
import ManageCoursePage from './courses/ManageCoursePage';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            {/* By declaring it above our Route component, it will always render */}
            <Switch>
                {/* Switch => allow us to declare that only one rout should match */}
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route path="/course" component={ManageCoursePage} />
                {/* slug like an ID, is uniqe but unlike ID, is friendlier to read in the url */}
                <Route component={PageNotFound} />  
                {/* don't have to declar a path here, if switch dont match any path , 
                it will render this component */}
            </Switch>
        </div>
    );
}

export default App;