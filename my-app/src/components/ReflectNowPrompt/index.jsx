import React, { Component } from 'react';
import SimpleModal from '../SimpleModal';
import Button from '@material-ui/core/Button';

const options = [
  'Yes',
  'No',
  'Snooze',
];

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class ReflectNowPrompt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      askLastTimeYouFeltThis: false,
    }
  }

  renderLastTimeYouFeltThis = () => {
    return (
      <div>
        <span>When was the last time that you felt this?</span>
        <input />
      </div>
    );
  }

  handleClick = option => {
    switch (option) {
      case 'Snooze':
        this.setState({ open: true });
        break;
      case 'Yes':
        this.setState({ askLastTimeYouFeltThis: true });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div>
        <span>Do you want to reflect on this now?</span>
        { options.map(option => <Button onClick={() => this.handleClick(option)}>{option}</Button>) }
        { this.state.open &&
          <SimpleModal
            open={this.state.open}
          />
        }
        { this.state.askLastTimeYouFeltThis &&
          <form className="ask-last-time-you-felt-this" onSubmit={this.handleSubmit}>
          <label>
            When was the last time that you felt this?
            <input />
          </label>
          <Button onClick={() => this.setState({ askLastTimeYouFeltThis: false })}>SAVE</Button>
        </form>
        }
      </div>
    );
  }
}

export default ReflectNowPrompt;
