import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './tmdb.css';
import Divider from '@material-ui/core/Divider';
//import Box from '@material-ui/core/Box';

const aPiKey = '4f7293179ec47513f99cf71f6a78671b';
const urlSearchString = "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=" + aPiKey;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '100%',
       maxWidth: 360,
       backgroundColor: theme.palette.background.paper,
     },
     chip: {
       marginRight: theme.spacing(1),
     },
     section1: {
       margin: theme.spacing(3, 2),
     },
     section2: {
       margin: theme.spacing(2),
     },
     section3: {
       margin: theme.spacing(3, 1, 1),
     },
   }));

function TMDB() {
  const classes = useStyles();
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
  let ignore = false;

  async function fetchData() {
    const result = await axios(urlSearchString);
    if (!ignore) setData(result.data);
  }

  fetchData();
  return () => { ignore = true; }
});

    return(
      <div className={classes.root}>
      <div className="tMDBCard">
        <Paper className={classes.root} style={{display: 'inline-block'}}>
        {data.results.map(function(item, index){
          return(
            <div key={index} className={classes.section1}>
              <Typography align="center" gutterBottom='true' variant="h5" component="h3">{item.title}</Typography>
              <Typography gutterBottom='true' component="p">{item.overview} </Typography>
              <div style={{marginTop: '2rem'}}>
              <Divider variant="middle" />
              </div>
            </div>
          )
        }
        )}
        </Paper>
      </div>
      </div>
    );
  }

export default TMDB;
