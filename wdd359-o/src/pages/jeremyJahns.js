import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import jeremyJahns from './../images/jeremyJahns.jpg';
import JeremyJYoutube from './../components/jeremyJYoutube';

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
  linkStyles:{
    textDecorationLine: 'none',
    color: 'black'
  }
}));

export default function JeremyJahns() {
  const classes = useStyles();

  return (
    <div>
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link color="inherit" to="/Reviews" className={classes.linkStyles}>
          Reviews
        </Link>
        <Link color="inherit" to="/NewReleases" className={classes.linkStyles} >
          New Releases
        </Link>
        <Link color="inherit" to="/About" className={classes.linkStyles}>
          About
        </Link>
        <Link color="inherit" to="/ContactUs" className={classes.linkStyles} >
          Contact Us
        </Link>
        <Typography color="textPrimary">Jeremy Jahns</Typography>
      </Breadcrumbs>
    </Paper>
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={jeremyJahns} className={classes.bigAvatar} />
    </Grid>
    <JeremyJYoutube />
    </div>
  );
}
