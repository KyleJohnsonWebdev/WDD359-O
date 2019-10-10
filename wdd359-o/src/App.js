import React from 'react';
import './App.css';
import Youtube from './components/youtube';
import TMDB from './components/tmdb';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>Project Proof of Concept.</p>
      <div>
        <Youtube />
        <TMDB />
      </div>
    </div>
  );
}

export default App;
