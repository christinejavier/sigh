import React, { Component } from 'react';

class SituationSentence extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSituationSentenceUpdate(this.state.value);
  }

  render() {
    return (
      <form className="situation-sentence" onSubmit={this.handleSubmit}>
        <label>
          Describe the situation in a sentence.
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SituationSentence;