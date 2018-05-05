import React from 'react';
import Section from '../Shared/Section';
import DevList from './DevList';

const Skills = () => {
  return (
    <Section id="skills">
      <div>
        <Section.Header text="Skills"/>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline list-icons">
          <DevList icon="html5"/>
          <DevList icon="css3"/>
          <DevList icon="js"/>
          <DevList icon="jquery"/>
          <DevList icon="sass"/>
          <DevList icon="less"/>
          <DevList icon="bootstrap"/>
          <DevList icon="wordpress"/>
          <DevList icon="grunt"/>
          <DevList icon="gulp"/>
          <DevList icon="npm"/>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Mobile-First, Responsive Design
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Functional Teams
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Skills;
