import React from 'react';
import { Switch, Route } from 'react-router-dom';
//App components
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import NoMatch from './Pages/NoMatch/NoMatch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  )
}

export default Routes;