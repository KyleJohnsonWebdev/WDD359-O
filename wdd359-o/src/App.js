import React from 'react';
import './App.css';
//import Youtube from './components/youtube';
import TMDB from './components/tmdb';
import Header from './components/header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchMovie from './components/search/Search.js';
import Routes from "../src/components/Routes";
//import ComingSoon from './components/comingSoon';
export default function App(){
  return (

    <div>
      <Container maxWidth="xl" className="wrapper">
        <Router>
          <Header className="header" />
          <main className="main">
          <Routes />

          </main>
          <aside className= "aside asideOne">
            <Typography variant="h5" align="center">Movie Information</Typography >
            <SearchMovie />
          </aside>
          <aside className= "aside asideTwo">
            <Typography variant="h5" align="center">Coming Soon</Typography >
            <TMDB />
          </aside>
          <footer className="footer"></footer>
        </Router>
      </Container>
    </div>

  );
}
