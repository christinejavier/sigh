import React, { Component } from 'react';
import './journal.css';

class JournalText extends Component {
  render() {
    return (
      <div>
        <span>Journal</span>
        <textarea type="journal"  rows="400" cols="50"></textarea>
      </div>
    );
  }
}

export default JournalText;
