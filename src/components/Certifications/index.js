import React from 'react';
import Section from '../Shared/Section';

const Certifications = () => {
  return (
    <Section id="certifications">
      <div>
        <Section.Header text="Certifications &amp; Trainings"/>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Ruby on Rails - Online Course
            <span>Dale hopkins University</span>
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Cryptography - Online Course
            <span>Stanford University</span>
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Responsive Web Design - Online Course
            <span>University of London</span>
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Angular Bootcamp - Training Camp
            <span>Gamma Partners</span>
          </li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Amazon Web Services Core Essentials - In Progress
            <span>Amazon Training and Certification</span>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Certifications;
