import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './tmdb.css';
//import Box from '@material-ui/core/Box';

const aPiKey = '4f7293179ec47513f99cf71f6a78671b';
const urlSearchString = "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=" + aPiKey;

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),

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
      <div className="tMDBCard">
        <Paper className={classes.root} style={{display: 'inline-block'}}>
        {data.results.map(function(item, index){
          return(
            <div key={index}>
              <Typography variant="h5" component="h3">{item.title}</Typography>
              <Typography component="p">{item.overview} </Typography>
            </div>
          )
        }
        )}
        </Paper>
      </div>
    );
  }

export default TMDB;
