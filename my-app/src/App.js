import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><a href="/feeling-picker">feeling-picker</a></li>
          <li><a href="/emotions-slider">emotions-slider</a></li>
          <li><a href="/happened-before">happened-before</a></li>
          <li><a href="/journal-text">journal-text</a></li>
          <li><a href="/reflect-now-prompt">reflect-now-prompt</a></li>
          <li><a href="/simple-modal">simple-modal</a></li>
          <li><a href="/situation-sentence">situation-sentence</a></li>
          <li><a href="/emotions-picker">emotions-picker</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
