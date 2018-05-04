import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Certifications from './Certifications';

const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <div className="container-fluid p-0">
          <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/about" render={() => (<Redirect to="/"/>)}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/education" component={Education}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/interests" component={Interests}/>
            <Route path="/certifications" component={Certifications}/>
            <Route path="*" render={() => (<Redirect to="/"/>)}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
