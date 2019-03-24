import React, { Component } from 'react';
import './happened-before.css';

class HappenedBefore extends Component {
  render() {
    return (
      <div className="form">
        <p>Have you felt this way before?</p>
        <input type="radio" name="happenedBefore" value="true" />Yes
        <br />
        <input type="radio" name="happenedBefore" value="false" />No
      </div>
    );
  }
}

export default HappenedBefore;
