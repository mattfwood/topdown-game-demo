import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
	  position: {
	    x: 50,
	    y: 0
	  }
	};

	componentDidMount() {
	  window.addEventListener('keyup', event => {
	    console.log(event);
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
	}

	moveUp = () => {
	  const { position } = this.state;
	  if (position.y > 0) {
	    position.y -= 50;
	    this.setState({ position });
	  }
	};

	moveDown = () => {
	  const { position } = this.state;
	  if (position.y < 450) {
	    position.y += 50;
	    this.setState({ position });
	  }
	};

	moveLeft = () => {
	  const { position } = this.state;
	  if (position.x > 0) {
	    position.x -= 50;
	    this.setState({ position });
	  }
	};

	moveRight = () => {
	  const { position } = this.state;
	  if (position.x < 450) {
	    position.x += 50;
	    this.setState({ position });
	  }
	};

	render() {
	  const { position } = this.state;
	  return (
	    <div className="App">
	      <div className="game-container">
	        <div
	          className="Player"
	          style={{
	            top: `${position.y}px`,
	            left: `${position.x}px`
	          }}
	        />
	      </div>
	    </div>
	  );
	}
}

export default App;
