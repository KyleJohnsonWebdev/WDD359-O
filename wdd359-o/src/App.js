import React from 'react';
import './App.css';
import Youtube from './youtube';
import TMDB from './tmbd';

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
