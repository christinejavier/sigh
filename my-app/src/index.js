import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import HappenedBefore from './components/HappenedBefore';
import JournalText from './components/JournalText';
import EmotionsSlider from './components/EmotionSlider';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/happened-before" component={HappenedBefore} />
      <Route path="/journal-text" component={JournalText} />
      <Route path="/emotion-slider" component={EmotionsSlider} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
