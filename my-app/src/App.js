import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/happened-before">happened-before</a></li>
          <li><a href="/journal-text">journal-text</a></li>
          <li><a href="/reflect-now-prompt">reflect-now-prompt</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
