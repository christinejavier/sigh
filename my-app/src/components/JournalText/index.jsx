import React, { Component } from 'react';


class App extends React.Component {
  
  render() {
    return (
      <textarea type="journal"  rows="400" cols="50"></textarea>
    );
  }
  
}

React.render(<App />, document.getElementById('app'));
