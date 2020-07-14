import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  </Router>
);

export default Routes;
