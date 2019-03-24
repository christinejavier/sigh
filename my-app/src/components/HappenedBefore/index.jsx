import React, { Component } from 'react';
import './happened-before.css';
import Button from '@material-ui/core/Button';

class HappenedBefore extends Component {
  render() {
    return (
      <div className="form">
        <p>Have you felt this way before?</p>
        <input type="radio" name="happenedBefore" value="true" />Yes
        <br />
        <input type="radio" name="happenedBefore" value="false" />No
        <br /><br />
        <Button variant="contained" color="primary" onClick={this.props.onNextClick}>
          Reflect
        </Button>
      </div>
    );
  }
}

export default HappenedBefore;
