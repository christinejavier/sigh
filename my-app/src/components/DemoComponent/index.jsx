import React, { Component } from 'react';
import './demo.css';

class DemoComponent extends Component {
  render() {
    return (
      <div className="demo">
        I AM A DEMO COMPONENT, {this.props.text}!
      </div>
    );
  }
}

export default DemoComponent;
