import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from './../images/Kyle.jpg';
import Paper from '@material-ui/core/Paper';

//variable for the style attributes
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 350,
  },
}));
//functional component
export default function About() {
  const classes = useStyles();

  return (
  <div> {/* root dom node */}
    <Typography gutterBottom='true' variant="h3" align="center">About</Typography>
    <Paper className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={logo}
            title="Kyle Johnson"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Kyle Johnson
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This is a website that tailors to the movie buff. Do you like trailers? Do you like reviews? Do you like movie posters? Then you are in the right place. Trailer park is built for you. It is all for you!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  </div>
  );
}
