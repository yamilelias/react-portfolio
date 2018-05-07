import React from 'react';
import Section from '../Shared/Section';

const Education = () => {
  return (
    <Section id="education">
      <div>
        <Section.Header text="Education"/>
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-logo pr-3">
            <img className="logo" src="../src/static/img/logos/tec_monterrey.svg" alt=""/>
          </div>
          <div className="resume-content">
            <h3 className="mb-0">Technology Institute of Monterrey</h3>
            <div className="subheading mb-3">Bachelor in Information Technologies</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2013 - Dic 2017</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
