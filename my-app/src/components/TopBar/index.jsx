import React, { Component } from 'react';
import './top-bar.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#c5e1a5',
    },
  },
});

function TopBar(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <a href="/" className="not-link">sigh</a>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);