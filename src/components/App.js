import React, { Component } from 'react';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';

class App extends Component {
  render() {
    return (
      <div id="page-top">
        <Nav/>
        <div className="container-fluid p-0">
          <About/>
          <Experience/>
          <Education/>
          <Skills/>
          <Interests/>
          <Awards/>
        </div>
      </div>
    );
  }
}

export default App;
