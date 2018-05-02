import React from 'react';
import PropTypes from 'prop-types';

const Social = (props) => {
  return (
    <li className="list-inline-item">
      <a href={`${props.href}`}>
        <span className="fa-stack fa-lg">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className={`fab fa-${props.icon} fa-stack-1x fa-inverse`}></i>
        </span>
      </a>
    </li>
  );
};

Social.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
};

Social.defaultPropTypes = {
  href: '#',
};

export default Social;
