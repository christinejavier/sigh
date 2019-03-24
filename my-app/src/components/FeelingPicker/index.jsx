import React, { Component } from 'react';
import './feeling-picker.css';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

class FeelingPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>feeling picker</p>
        <Button variant="contained" color="primary" onClick={this.onNextClick}>
          Next
        </Button>
      </div>
    );
  }

  onNextClick = () => {
    this.props.history.push('/emotions-slider');
  }
}

export default withRouter(FeelingPicker);
