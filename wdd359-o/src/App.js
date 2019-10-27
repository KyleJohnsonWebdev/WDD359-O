import React from 'react';
import './App.css';
import TMDB from './components/tmdb';
import Header from './components/header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchMovie from './components/search/Search.js';
import Routes from "../src/components/Routes";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function App(props){
  const classes = useStyles();
  return (
    <Container maxWidth='xl'>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Router>
            <Grid item xs={12}>
                  <Header />
              </Grid>
            <Grid item xs={12} sm={3}>
              <aside >
                <Typography gutterBottom="true" variant="h5" align="center">
                  Find Movies
                </Typography >
                <SearchMovie />
              </aside>
            </Grid>
           <Grid item xs={12} sm={6}>
              <main >
                <Routes />
              </main>
            </Grid>
            <Grid item xs={12} sm={3}>
              <aside >
                <Typography  gutterBottom='true' variant="h5" align="center">
                  Coming Soon
                </Typography >
                <TMDB />
              </aside>
            </Grid>
            <Grid item xs={12}>
              <footer ></footer>
            </Grid>
          </Router>
        </Grid>
      </div>
    </Container>
  );
}
