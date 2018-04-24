import React, { Component } from 'react';
import './App.css';

import Player from './components/Player';
import Grid from './components/Grid';
import Obstacle from './components/Obstacle';

class App extends Component {
  state = {
    position: {
      x: 0,
      y: 0
    },
    playerMoving: false,
    // create array of objects with grid/square number and obstacle: false to start
    grid: Array.from({ length: 25 }, (v, i) => i).map((item, index) => ({
      number: index
    })),
    obstacles: []
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

    this.createObstacle({ x: 0, y: 1 });
    this.createObstacle({ x: 0, y: 3 });
    this.createObstacle({ x: 0, y: 5 });
    this.createObstacle({ x: 2, y: 2 });
  }

  // CONTROLLER
  moveUp = () => {
    const { position, playerMoving } = this.state;
    const newPosition = Object.assign({}, position);
    newPosition.y -= 1;
    const collision = this.checkCollision(newPosition);
    console.log(newPosition);
    if (position.y > 0 && playerMoving === false && collision === false) {
      this.setState({ position: newPosition, playerMoving: true });
      // wait 300ms for CSS transition
      setTimeout(() => {
        this.setState({ playerMoving: false });
      }, 300);
    }
  };

  moveDown = () => {
    const { position, playerMoving } = this.state;
    const newPosition = Object.assign({}, position);
    newPosition.y += 1;
    const collision = this.checkCollision(newPosition);
    console.log(newPosition);
    if (position.y < 4 && playerMoving === false && collision === false) {
      this.setState({ position: newPosition, playerMoving: true });
      // wait 300ms for CSS transition
      setTimeout(() => {
        this.setState({ playerMoving: false });
      }, 300);
    }
  };

  moveLeft = () => {
    const { position, playerMoving } = this.state;
    const newPosition = Object.assign({}, position);
    newPosition.x -= 1;
    const collision = this.checkCollision(newPosition);
    console.log(newPosition);
    if (position.x > 0 && playerMoving === false && collision === false) {
      this.setState({ position: newPosition, playerMoving: true });
      // wait 300ms for CSS transition
      setTimeout(() => {
        this.setState({ playerMoving: false });
      }, 300);
    }
  };

  moveRight = () => {
    const { position, playerMoving } = this.state;
    const newPosition = Object.assign({}, position);
    newPosition.x += 1;
    const collision = this.checkCollision(newPosition);
    console.log(newPosition);
    if (position.x < 4 && playerMoving === false && collision === false) {
      this.setState({ position: newPosition, playerMoving: true });
      // wait 300ms for CSS transition
      setTimeout(() => {
        this.setState({ playerMoving: false });
      }, 300);
    }
  };

  createObstacle = position => {
    const { obstacles } = this.state;
    obstacles.push({ position });
    this.setState({ obstacles });
  };

  checkCollision = newPosition => {
    const { obstacles } = this.state;
    const collision = obstacles.filter(obstacle => {
      return JSON.stringify(obstacle.position) === JSON.stringify(newPosition);
    });

    // if new position has any overlap with obstacles, return false
    if (collision.length > 0) {
      console.log('COLLISION DETECTED');
      return true;
    }

    console.log(collision);

    // otherwise return true
    return false;
  };

  render() {
    const { position, grid, obstacles } = this.state;
    return (
      <div className="App">
        <div className="game-container">
          <div className="grid-container">
            <Grid grid={grid} />
            <Player position={position} />
            {obstacles.map(obstacle => (
              <Obstacle position={obstacle.position} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
