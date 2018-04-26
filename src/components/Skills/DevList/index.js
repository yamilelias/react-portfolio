import React from 'react';
import PropTypes from 'prop-types';

const DevList = (props) => {
  return (
    <li className="list-inline-item">
      <i className={`devicons fab fa-${props.icon}`}></i>
    </li>
  );
};

DevList.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default DevList;
