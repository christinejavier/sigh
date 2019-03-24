import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
    // this.props.onSituationSentenceUpdate(this.state.value);
  }

  render() {
    return (
      <div>
        <form className="situation-sentence" onSubmit={this.handleSubmit}>
          <label>
            Describe the situation in a sentence.
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Button variant="contained" color="primary" onClick={this.onNextClick}>
          Next
        </Button>
      </div>
    );
  }

  onNextClick = () => {
    this.props.history.push('/reflect-now-prompt');
  }
}

export default SituationSentence;
