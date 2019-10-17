import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mrSunday from './../images/MrSunday.jpg';
import cinemaSins from './../images/cinemaSins.jpg';
import jeremyJahns from './../images/jeremyJahns.jpg';
import chrisStuckmann from './../images/chrisStuckmann.jpg';
import screenRant from './../images/screenRant.jpg';
import rottenTomatoes from './../images/rottenTomatoes.jpg';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(3, 2),
    },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
  },
}));

function Reviews(){
  const classes = useStyles();
  return(
  <div>
    <Typography gutterBottom='true' variant="h3" align="center">Reviews</Typography>
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card  className={classes.card}>
            <CardActionArea component={Link} to={'/mrSunday'} underline="none">
            <CardMedia
              className={classes.media}
              image= {mrSunday}
              title="Mr. Sunday Badge"
            />
            <CardContent>
              <Typography underline="none" gutterBottom variant="h5" component="h2">
                Mr. Sunday
              </Typography>
            </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea component={Link} to={'/cinemaSins'} underline="none">
              <CardMedia
                className={classes.media}
                image= {cinemaSins}
                title="cinema Sins Badge"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cinema Sins
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea component={Link} to={'/jeremyJahns'} underline="none">
              <CardMedia
              className={classes.media}
              image= {jeremyJahns}
              title="jeremy Jahns Badge"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jeremy Jahns
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea component={Link} to={'/chrisStuckmann'} underline="none">
              <CardMedia
              className={classes.media}
              image= {chrisStuckmann}
              title="chris Stuckmann Badge"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Chris Stuckmann
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea component={Link} to={'/screenRant'} underline="none">
              <CardMedia
              className={classes.media}
              image= {screenRant}
              title="screen Rant Badge"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Screen Rant
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea component={Link} to={'/rottenTomatoes'} underline="none">
              <CardMedia
              className={classes.media}
              image= {rottenTomatoes}
              title="rotten Tomatoes Badge"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Rotten Tomatoes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  </div>
  );
}
export default Reviews
