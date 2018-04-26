import React from 'react';
import PropTypes from 'prop-types';

const ResumeContent = (props) => {
  return (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
      <div className="resume-content mr-auto">
        <h3 className="mb-0">{props.title}</h3>
        <div className="subheading mb-3">{props.company}</div>
        <p>{props.children}</p>
      </div>
      <div className="resume-date text-md-right">
        <span className="text-primary">{props.date}</span>
      </div>
    </div>
  );
};

ResumeContent.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  date: PropTypes.string.isRequired,
  children: PropTypes.element,
};

ResumeContent.defaultPropTypes = {
  subheading: '',
};

export default ResumeContent;
