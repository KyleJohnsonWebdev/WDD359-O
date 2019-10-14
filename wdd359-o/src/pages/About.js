import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './../images/Kyle.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function About() {
  const classes = useStyles();

  return (
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
            This is a website that tailors to the movie buff. Do you like trailers? Do you like reviews? Do you like movie posters? Then you are in the right place. Trailer park is built for you is all for you!
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
