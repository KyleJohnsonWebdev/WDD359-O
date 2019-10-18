import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import chrisStuckmann from './../images/chrisStuckmann.jpg';
import ChrisSYoutube from './../components/chrisSYoutube';

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


export default function RottenTomatoes() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link color="inherit" href="/Reviews">
          Reviews
        </Link>
        <Link color="inherit" href="/NewReleases" >
          New Releases
        </Link>
        <Link color="inherit" href="/About" >
          About
        </Link>
        <Link color="inherit" href="/ContactUs" >
          Contact Us
        </Link>
        <Typography color="textPrimary">Rotten Tomatoes</Typography>
      </Breadcrumbs>
    </Paper>
  );
}
