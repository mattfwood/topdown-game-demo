import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ position }) => {
  return (
    <div
      className="Player"
      style={{
        top: `${position.y * 100}px`,
        left: `${position.x * 100}px`
      }}
    />
  );
};

Player.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default Player;
