import React from 'react';
import PropTypes from 'prop-types';

const DevCard = (props) => {
  return (
    <div className="col">
      <div className={`card text-white ${props.style} mb-3 text-center`}>
        <div className="card-body">
          <i className={`devicons fab fa-${props.icon} mb-3`}></i>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

DevCard.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.string,
  title: PropTypes.string.isRequired,
};

DevCard.defaultProps = {
  style: 'bg-primary',
};

export default DevCard;
