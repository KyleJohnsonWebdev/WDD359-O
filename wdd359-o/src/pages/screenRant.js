import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import screenRant from './../images/screenRant.jpg';
import ScreenRantYoutube from './../components/screenRantYoutube';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function ScreenRant() {
  const classes = useStyles();
  return (
  <div>
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      <Link color="inherit" to="/Reviews" style={{ textDecorationLine: 'none', color: 'black' }}>
        Reviews
      </Link>
      <Link color="inherit" to="/NewReleases" style={{ textDecorationLine: 'none', color: 'black' }} >
        New Releases
      </Link>
      <Link color="inherit" to="/About" style={{ textDecorationLine: 'none', color: 'black' }}>
        About
      </Link>
      <Link color="inherit" to="/ContactUs" style={{ textDecorationLine: 'none', color: 'black' }} >
        Contact Us
      </Link>
        <Typography color="textPrimary">Screen Rant</Typography>
      </Breadcrumbs>
    </Paper>
    <Grid container justify="center" alignItems="center">
      <Avatar alt="screen Rant badge" src={screenRant} className={classes.bigAvatar} />
    </Grid>
    <ScreenRantYoutube />
  </div>
  );
}
