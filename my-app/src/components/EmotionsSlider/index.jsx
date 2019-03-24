import React, { Component } from 'react';
import './emotionsslider.css';
import Button from '@material-ui/core/Button';

class EmotionsSlider extends Component {
  render() {
    return (
      <div>
        <form action="#" method="post">
          Rate the intensity of your emotions.
          <br />
          <input type="range" id="rating" min="1" max="5" />
        </form>
        <Button variant="contained" color="primary" onClick={this.onNextClick}>
          Next
        </Button>
      </div>
    )
  }

  onNextClick = () => {
    this.props.history.push('/happened-before');
  }

}
export default EmotionsSlider; 