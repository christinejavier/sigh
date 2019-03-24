import React, { Component } from 'react';
import './App.css';
import HappenedBefore from './components/HappenedBefore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <HappenedBefore></HappenedBefore>
      </div>
    );
  }
}

export default App;
