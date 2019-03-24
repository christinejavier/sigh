import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './emotions-picker.css';
import Modal from '@material-ui/core/Modal';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Popover from '@material-ui/core/Popover';
import InputLabel from '@material-ui/core/InputLabel';

const emotions = [
  'Sad',
  'Anxious',
  'Insecure',
  'Embarrassed',
  'Helpless',
  'Rejected',
  'Confused',
  'Irritated',
  'Jealous',
  'Frustrated',
];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class EmotionsPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedEmotions: [],
      modalOpen: false,
    };

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

  handleSelectChange = (event) => {
    this.setState({
      selectedEmotions: event.target.value,
    });

    if (this.state.selectedEmotions.length > 3) {
      return this.setState({
        modalOpen: false,
      });
    }
  }

  handleClickWheel = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return (
      <div className="emotions-picker">
        <div className="upper-quad">
          <span className="inline-block left-align">Stress</span>
          <span className="inline-block right-align">Anger</span>
        </div>
        <img className="block" onClick={this.handleClickWheel} src="color-picker-transparent.png"/>
        <div className="lower-quad">
          <span className="inline-block left-align">Content</span>
          <span className="inline-block right-align">Sadness</span>
        </div>
        <Popover
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
        <FormControl>
          <InputLabel htmlFor="select-multiple-chip">More Emotions</InputLabel>
          <Select
            multiple
            value={this.state.selectedEmotions}
            onChange={(val) => this.handleSelectChange(val)}
            input={<Input id="select-multiple-chip" />}
            renderValue={() => (
              <div>
                {this.state.selectedEmotions.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {emotions.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Popover>
      </div>
    );
  }

  onNextClick = () => {
    this.props.history.push('/reflect-now-prompt');
  }
}

export default EmotionsPicker;
