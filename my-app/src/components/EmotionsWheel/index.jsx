import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class EmotionsWheel extends Component {
  handleChange = () => {
    const { handleEmotionSelection } = this.props;
    handleEmotionSelection('SAD');
  }

  render() {
    return (
      <SketchPicker
        onChange={this.handleChange}
      />
    );
  }
}

export default EmotionsWheel;
