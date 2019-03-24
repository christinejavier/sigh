import React, { Component } from 'react';
import './bottom-nav.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SettingsIcon from '@material-ui/icons/Settings';

const styles = {
  root: {
    width: 500,
  },
};

class BottomNav extends React.Component {SettingsInputComponentRounded
  state = {
    value: 0,
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
        className={classes.root}
      >
        <BottomNavigationAction label="Log" icon={<InsertCommentIcon />}/>
        <BottomNavigationAction label="Report" icon={<InsertChartIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />}/>
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);