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

export default function ChrisStuckmann() {
  const classes = useStyles();

  return (
    <div>
      <Paper underline="none" elevation={0} className={classes.paper}>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb" underline="none">
          <Link color="inherit" to="/Reviews" style={{ textDecorationLine: 'none', color: 'black' }}>
            Reviews
          </Link>
          <Link color="inherit" to="/NewReleases" style={{ textDecorationLine: 'none', color:'black' }}>
            New Releases
          </Link>
          <Link color="inherit" to="/About" style={{ textDecorationLine: 'none', color: 'black' }}>
            About
          </Link>
          <Link color="inherit" to="/ContactUs" style={{ textDecorationLine: 'none', color: 'black' }}>
            Contact Us
          </Link>
          <Typography color="textPrimary">Chris Stuckmann</Typography>
        </Breadcrumbs>
      </Paper>
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Remy Sharp" src={chrisStuckmann} className={classes.bigAvatar} />
      </Grid>
      <ChrisSYoutube />
      </div>
  );
}
