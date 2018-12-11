import React from 'react';
import { Router, IndexRoute } from "react-router";
import { Home, My } from '../js/containers';
import App from '../App';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="my">
        <IndexRoute component={MyScreen}/>
      </Route>
    </Route>
  );

export default (
  <Router path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Router path="my">
      <IndexRoute component={My}></IndexRoute>
    </Router>
  </Router>
)