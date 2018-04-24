import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ grid }) => {
  return grid.map(square => {
    return (
      <div
        className="square"
        key={square.number}
      />
    );
  });
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Grid;
