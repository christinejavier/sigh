import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <ul>
        <li><a href="/">home</a></li>
        <li><a href="/happened-before">happened-before</a></li>
        <li><a href="/journal-text">journal-text</a></li>
        <li><a href="/emotion-slider">emotion-slider</a></li>
        <li><a href="/reflect-now">reflect-now</a></li>
      </ul>
    );
  }
}

export default App;
