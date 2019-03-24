import React, { Component } from 'react';
import './App.css';
import HappenedBefore from './components/HappenedBefore';
import ReflectNowPrompt from './components/ReflectNowPrompt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReflectNowPrompt/>
        <HappenedBefore></HappenedBefore>
      </div>
    );
  }
}

export default App;
