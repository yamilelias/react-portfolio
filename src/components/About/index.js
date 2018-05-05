import React from 'react';

import Social from '../Shared/Icons/Social';
import Section from '../Shared/Section';

const About = () => {
  return (
    <Section id="about">
      <div>
        <h1 className="mb-0">Yamil<span className="text-primary">Elías</span>
        </h1>
        <div className="subheading mb-5">Chihuahua, Chih, México · <a href="mailto:yamileliassoto@gmail.com">yamileliassoto@gmail.com</a>
        </div>
        <div className="small-section">
          <div className="col-sm-12 col-lg-5 col-md-8 left">
            <p className="mb-5">I <i>analyze</i>, <i>optimize</i> and <i>implement</i> applications
              to provide innovative automation solutions. <strong>Information
                Technologies Engineer</strong> with experience
              working for companies in web development, database management, design,
              IT support, team management, project management and strategic planning.
              However, I'm also interested to improve my skills in information
              security and mobile development mainly.</p>
            <ul className="list-inline list-social-icons mb-0">
              <Social icon="twitter" href="https://twitter.com/elyamilin"/>
              <Social icon="linkedin" href="https://www.linkedin.com/in/yamilelias/"/>
              <Social icon="github" href="https://github.com/yamilelias"/>
              <Social icon="stack-overflow" href="https://stackoverflow.com/users/4762439/yamilelias"/>
            </ul>
          </div>
          <div className="col-sm-8 col-lg-5 col-md-8 right">
            <img src="../src/static/img/dummy.jpg" width="250px" className="right"/>
          </div>
        </div>
        <div className="small-section">
          <div className="col-sm-12 col-lg-5 col-md-8">
            <img src="../src/static/img/dummy.jpg" width="250px"/>
          </div>
          <div className="col-sm-12 col-lg-6 col-md-8">
            <div className="hobbies text-right">
              <h2 className="mb-5">Hobbies</h2>
              <ul className="list-inline list-social-icons mb-0">
                <li>Music</li>
                <li>videogames</li>
                <li>Travel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
