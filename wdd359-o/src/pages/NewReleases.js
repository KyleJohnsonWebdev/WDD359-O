import React from 'react'
import TwentiethCenturyFox from './../components/twentiethCenturyFox';
import WaltDisneyStudios from './../components/waltDisneyStudios';
import ATwentyFour from './../components/aTwentyFour';
import BlumHouse from './../components/blumHouse';
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
      <div>
        <Paper className={classes.root}>
          <ATwentyFour />
          <TwentiethCenturyFox />
          <WaltDisneyStudios />
          <BlumHouse />
        </Paper>
      </div>
    </div>
  );
}
export default NewReleases
