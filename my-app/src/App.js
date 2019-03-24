import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoComponent from './components/DemoComponent';
import HappenedBefore from './components/HappenedBefore';
import EmotionsSlider from './components/EmotionsSlider';

const text = 'HELLO';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <EmotionsSlider></EmotionsSlider>
    );
  }
}

export default App;
