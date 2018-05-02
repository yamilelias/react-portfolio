import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
  return (
    <li className="nav-item">
      <NavLink
        to={`/${props.name.toLowerCase()}`}
        className="nav-link js-scroll-trigger"
        activeClassName="active">
          {props.name}
       </NavLink>
    </li>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Link;
