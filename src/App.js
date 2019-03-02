import React, { Component } from 'react';
import back_card from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={back_card} className="App-logo" alt="back_card" />
          <p>
            Mystical Tarot
          </p>
          <a
            className="Card"
            href="#"
            target="_blank"
            rel="deck"
          >
            Card
          </a>
        </header>
      </div>
    );
  }
}

export default App;
