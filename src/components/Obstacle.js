import React from 'react';
import PropTypes from 'prop-types';

const Obstacle = ({ position }) => {
  return (
    <div
      className="Obstacle"
      style={{
        top: `${position.y * 100}px`,
        left: `${position.x * 100}px`
      }}
    />
  );
};

Obstacle.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default Obstacle;
