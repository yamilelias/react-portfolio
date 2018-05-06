import React from 'react';
import Section from '../Shared/Section';

const Certifications = () => {
  return (
    <Section id="certifications">
      <div>
        <Section.Header text="Certifications &amp; Trainings"/>
        <div className="small-section">
          <div className="left">
            <ul className="fa-ul mb-0 list-group">
              <li>
                <i className="fa-li fa fa-chevron-right text-warning"></i>
                <strong>Ruby on Rails</strong> - Online Course
                <span>Dale Hopkins University</span>
              </li>
              <li>
                <i className="fa-li fa fa-chevron-right text-warning"></i>
                <strong>Cryptography</strong> - Online Course
                <span>Stanford University</span>
              </li>
              <li>
                <i className="fa-li fa fa-chevron-right text-warning"></i>
                <strong>Responsive Web Design</strong> - Online Course
                <span>University of London</span>
              </li>
              <li>
                <i className="fa-li fa fa-chevron-right text-warning"></i>
                <strong>Angular Bootcamp</strong> - Training Camp
                <span>Gamma Partners</span>
              </li>
              <li>
                <i className="fa-li fa fa-chevron-right text-warning"></i>
                <strong>Amazon Web Services Core Essentials</strong> - In Progress
                <span>Amazon Training and Certification</span>
              </li>
            </ul>
          </div>
          <div className="right show">
            <img src="../src/static/img/certificate.png" alt=""/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
