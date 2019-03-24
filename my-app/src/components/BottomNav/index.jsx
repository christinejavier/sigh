import React, { Component } from 'react';
import './bottom-nav.css';

import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HistoryIcon from '@material-ui/icons/History';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SettingsIcon from '@material-ui/icons/Settings';

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

class BottomNav extends React.Component {SettingsInputComponentRounded
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.stickToBottom}
      >
        <BottomNavigationAction label="New" icon={<InsertCommentIcon />} component={Link} to='/feeling-picker'/>
        <BottomNavigationAction label="History" icon={<HistoryIcon />} component={Link} to='/history'/>
        <BottomNavigationAction label="Report" icon={<InsertChartIcon />} component={Link}/>
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link}/>
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);