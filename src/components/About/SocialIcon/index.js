import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon = (props) => {
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

SocialIcon.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
};

SocialIcon.defaultPropTypes = {
  href: '#',
};

export default SocialIcon;
