import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,

  },
  dividerTwo: {
    height: 2,
    marginTop: 20,
    marginBottom: 20,

  },
  rootTwo:{
    padding: theme.spacing(3, 2),
  },
  button: {
    margin: theme.spacing(1),
  },

}));

export default function SearchMovie(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const onChange = event => setValue(event.target.value);
  const [data, setData] = useState({ results: [] });
//  const [videoID, setVideoID] = useState('');
  const viewMovie = (e) => {
    //i want to use that binded variable here
    console.log(e);
    const url = "https://www.themoviedb.org/movie/" + e;
    window.open(url)

  }

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
          <div>
              <Typography align="center" gutterBottom='true' variant="h5" component="h3">{item.title}</Typography>
              <Typography align="center" gutterBottom='true' variant="h5" component="h3">
              <img alt="poster" src={"https://image.tmdb.org/t/p/w185/"+item.poster_path} style={{maxWidth:"100%"}}/>
              </Typography>
              <Typography gutterBottom='true' component="p">{item.overview} </Typography>
              <Typography gutterBottom='true' component="p">Release Date:{item.release_date} </Typography>
              <Button variant="contained" className={classes.button} onClick={ () => {viewMovie(item.id)}}
              >
                view {item.title} on TMDB
              </Button>
              <Divider className={classes.dividerTwo} orientation="horizontal" />
          </div>
        )}
      )}
    </div>

    </div>
  );
}
