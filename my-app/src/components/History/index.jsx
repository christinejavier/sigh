import React, { Component } from 'react';
import './history.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: 15,
  },
  date: {
    fontSize: 14,
  },
  title: {
    marginBottom: 10,
  },
  button: {
    position: 'absolute',
    right: 30
  }
};

function History(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          Friday, March 22, 2019
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title}>
          Angry
        </Typography>
        <Typography component="p">
          Today I...
        </Typography>
      </CardContent>
      <CardActions>
        <Typography color="textSecondary">
          <LocationOnIcon style={{fontSize: '15px'}} />&nbsp;
          Mother-in-Law's House
        </Typography>
        <Button variant="outlined" size="small" className={classes.button}>Reflect</Button>
      </CardActions>
    </Card>

    <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.date} color="textSecondary" gutterBottom>
        Wednesday, March 20, 2019
      </Typography>
      <Typography variant="h5" component="h2" className={classes.title}>
        Sad
      </Typography>
      <Typography component="p">
        Today I...
      </Typography>
    </CardContent>
    <CardActions>
      <Typography color="textSecondary">
        <LocationOnIcon style={{fontSize: '15px'}} />&nbsp;
        Home
      </Typography>
      <Button variant="outlined" size="small" className={classes.button}>Reflect</Button>
    </CardActions>
    </Card>
    </div>
  );
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(History);