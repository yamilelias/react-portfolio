import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const Section = (props) => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column"
             id={props.id}>
      <div className="my-auto">
        {props.children}
      </div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Section.defaultProps = {
  id: '',
};

Section.Header = Header;

export default Section;
