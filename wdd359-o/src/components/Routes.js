import React from 'react';
import { Route } from "react-router-dom";
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import NewReleases from '../pages/NewReleases';
import Reviews from '../pages/Reviews';
import MrSunday from '../pages/mrSunday';
import CinemaSins from '../pages/cinemaSins';
import JeremyJahns from '../pages/jeremyJahns';
import RottenTomatoes from '../pages/rottenTomatoes';
import ChrisStuckmann from '../pages/chrisStuckmann';
import ScreenRant from '../pages/screenRant';

function Routes(){
  return(
      <div>
        <Route exact path="/About" component={About} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/NewReleases" component={NewReleases} />
        <Route exact path="/mrSunday" component={MrSunday} />
        <Route exact path="/cinemaSins" component={CinemaSins} />
        <Route exact path="/jeremyJahns" component={JeremyJahns} />
        <Route exact path="/rottenTomatoes" component={RottenTomatoes} />
        <Route exact path="/chrisStuckmann" component={ChrisStuckmann} />
        <Route exact path="/screenRant" component={ScreenRant} />
        <Route exact path="/Reviews" component={Reviews} />
      </div>
    )
  }

export default Routes
