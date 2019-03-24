import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import TopBar from './components/TopBar';
import HappenedBefore from './components/HappenedBefore';
import JournalText from './components/JournalText';
import EmotionsSlider from './components/EmotionsSlider';
import ReflectNowPrompt from './components/ReflectNowPrompt';
import * as serviceWorker from './serviceWorker';
import Grid from '@material-ui/core/Grid';

const routing = (
  <Router>
    <TopBar></TopBar>
    <div className="main-container">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Route exact path="/" component={App} />
          <Route path="/happened-before" component={HappenedBefore} />
          <Route path="/journal-text" component={JournalText} />
          <Route path="/emotion-slider" component={EmotionsSlider} />
          <Route path="/reflect-now" component={ReflectNowPrompt} />
        </Grid>
      </Grid>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
