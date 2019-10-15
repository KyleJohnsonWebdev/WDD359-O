import React from 'react'
import Youtube from './../components/youtube';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

function NewReleases(){
  const classes = useStyles();
  return(
    <div>
      <Typography gutterBottom='true' variant="h3" align="center">New Releases</Typography>
      <Paper className={classes.root}>
        <Youtube />
      </Paper>
    </div>
  );
}
export default NewReleases
