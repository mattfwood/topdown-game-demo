import React, { Component } from 'react';
import './App.css';

import Player from './components/Player';
import Grid from './components/Grid';

class App extends Component {
  state = {
    position: {
      x: 100,
      y: 0
    },
    playerMoving: false,
    // create array of objects with grid/square number and obstacle: false to start
    grid: Array.from({ length: 25 }, (v, i) => i).map((item, index) => ({
      number: index,
      obstacle: false
    }))
  };

  componentDidMount() {
    window.addEventListener('keyup', event => {
      switch (event.code) {
      case 'ArrowUp':
        this.moveUp();
        break;

      case 'ArrowDown':
        this.moveDown();
        break;

      case 'ArrowLeft':
        this.moveLeft();
        break;

      case 'ArrowRight':
        this.moveRight();
        break;

      default:
        break;
      }
    });

    this.createObstacle(4);
  }

  // CONTROLLER
  moveUp = () => {
    const { position, playerMoving } = this.state;
    if (position.y > 0 && playerMoving === false) {
      this.setState({ playerMoving: true });
      position.y -= 100;
      this.setState({ position });
      // wait 300ms for CSS transition
      setTimeout(() => {
        this.setState({ playerMoving: false });
      }, 300);
    }
  };

  moveDown = () => {
    const { position, playerMoving } = this.state;
    if (position.y < 450 && playerMoving === false) {
      this.setState({ playerMoving: true });
      position.y += 100;
      this.setState({ position });
      // wait 300ms for CSS transition
      setTimeout(() => {
        this.setState({ playerMoving: false });
      }, 300);
    }
  };

  moveLeft = () => {
    const { position, playerMoving } = this.state;
    if (position.x > 0 && playerMoving === false) {
      this.setState({ playerMoving: true });
      position.x -= 100;
      this.setState({ position });
      // wait 300ms for CSS transition
      setTimeout(() => {
        this.setState({ playerMoving: false });
      }, 300);
    }
  };

  moveRight = () => {
    const { position, playerMoving } = this.state;
    if (position.x < 450 && playerMoving === false) {
      this.setState({ playerMoving: true });
      position.x += 100;
      this.setState({ position });
      // wait 300ms for CSS transition
      setTimeout(() => {
        this.setState({ playerMoving: false });
      }, 300);
    }
  };

  createObstacle = index => {
    const { grid } = this.state;
    grid[index].obstacle = true;

    this.setState({ grid });
  };

  render() {
    const { position, grid } = this.state;
    return (
      <div className="App">
        <div className="game-container">
          <div className="grid-container">
            <Grid grid={grid} />
            <Player position={position} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
