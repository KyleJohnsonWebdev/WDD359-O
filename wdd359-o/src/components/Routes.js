import React from 'react';
import { Route } from "react-router-dom";
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import NewReleases from '../pages/NewReleases';
import Reviews from '../pages/Reviews';

function Routes(){
  return(
      <div>
        <Route exact path="/About" component={About} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/NewReleases" component={NewReleases} />
        <Route exact path="/Reviews" component={Reviews} />
      </div>
    )
  }

export default Routes
