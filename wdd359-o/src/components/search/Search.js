import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
const aPiKey = '4f7293179ec47513f99cf71f6a78671b';

const urlSearchString = "https://api.themoviedb.org/3/search/movie?api_key=" + aPiKey + "&query=";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  rootTwo:{
    padding: theme.spacing(3, 2),
  }

}));

export default function SearchMovie() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const onChange = event => setValue(event.target.value);
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
  let ignore = false;

  async function fetchData() {
    const result = await axios(urlSearchString + value);
    if (!ignore) setData(result.data);
  }

  fetchData();
  return () => { ignore = true; }
  });


  return (
    <div>
    <Paper className={classes.root}>
    <InputBase
      className={classes.input}
      placeholder="Search Movies"
      inputProps={{ 'aria-label': 'search movie information' }}
      value={value} type="text" onChange={onChange}
    />
    <IconButton className={classes.iconButton} aria-label="search">
      <SearchIcon />
    </IconButton>
    <Divider className={classes.divider} orientation="vertical" />
    </Paper>
    <div>
      {data.results.map(function(item, index){
        return(
          <Paper key={index} className={classes.rootTwo}>

              <Typography align="center" gutterBottom='true' variant="h5" component="h3">{item.title}</Typography>
              <Typography align="center" gutterBottom='true' variant="h5" component="h3">
              <img alt="poster" src={"https://image.tmdb.org/t/p/w185/"+item.poster_path} style={{maxWidth:"100%"}}/>
              </Typography>
              <Typography gutterBottom='true' component="p">{item.overview} </Typography>
              <Typography gutterBottom='true' component="p">Release Date:{item.release_date} </Typography>
          </Paper>
        )}
      )}
    </div>

    </div>
  );
}
