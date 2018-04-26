import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <h2 className="mb-5">{props.text}</h2>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
