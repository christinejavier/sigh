import React, { Component } from 'react';
import './App.css';
import HappenedBefore from './components/HappenedBefore';

class App extends Component {
  render() {
    return (
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/happened-before">happened-before</a></li>
        <li><a href="/journal-text">journal-text</a></li>
      </ul>
    );
  }
}

export default App;
