import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import './index.css';


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
  }

  render() {
    return (
      <div>
        <form className="situation-sentence" onSubmit={this.handleSubmit}>
          <label>
            Describe the situation in a sentence.
          </label>
            <Input type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
      </div>
    );
  }

  // onNextClick = () => {
  //   this.props.history.push('/reflect-now-prompt');
  // }
}

export default SituationSentence;
