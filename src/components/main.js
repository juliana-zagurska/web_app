import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contacts from './contacts';
import Portfolio from './portfolio';
import Stack from './stack';


const Main = () => (
  <Switch>
  <Route exact path="/" component={LandingPage} />
  <Route path="/aboutme" component={AboutMe} />
  <Route path="/contacts" component={Contacts} />
  <Route path="/portfolio" component={Portfolio} />
  <Route path="/stack" component={Stack} />
  </Switch>
)

export default Main;
