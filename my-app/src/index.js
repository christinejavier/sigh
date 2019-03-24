import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import History from './components/History';
import HappenedBefore from './components/HappenedBefore';
import JournalText from './components/JournalText';
import ReflectNowPrompt from './components/ReflectNowPrompt';
import EmotionsSlider from './components/EmotionsSlider';
import SituationSentence from './components/SituationSentence';
import FeelingPicker from './components/FeelingPicker';
import EmotionsPicker from './components/EmotionsPicker';

import * as serviceWorker from './serviceWorker';
import Grid from '@material-ui/core/Grid';

const routing = (
  <Router>
    <TopBar></TopBar>
    <div className="main-container">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Route exact path="/" component={App} />
          <Route path="/history" component={History} />
          <Route path="/feeling-picker" component={FeelingPicker} />
          <Route path="/emotions-slider" component={EmotionsSlider} />
          <Route path="/happened-before" component={HappenedBefore} />
          <Route path="/journal-text" component={JournalText} />
          <Route path="/reflect-now-prompt" component={ReflectNowPrompt} />
          <Route path="/situation-sentence" component={SituationSentence} />
          <Route path="/emotions-picker" component={EmotionsPicker} />
        </Grid>
      </Grid>
    </div>
    <BottomNav></BottomNav>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
