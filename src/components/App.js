import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import CoursesPage from './courses/CoursesPage';
import HomePage from './home/HomePage';
import PageNotFound from './PageNotFound';

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
                <Route component={PageNotFound} />  
                {/* don't have to declar a path here, if switch dont match any path , 
                it will render this component */}
            </Switch>
        </div>
    );
}

export default App;