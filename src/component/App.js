import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './dashboard/Dashboard';
import { Box } from '@material-ui/core';
import Copyright from './dashboard/Copyright';
import Header from './header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <Router>
        <Switch>
          <Route
            exact
            path="/agile-poker/:team"
            component={Dashboard}
          />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>

      <footer>
        <Box mt={8}>
          <Copyright />
        </Box>
      </footer>
    </div>
  );
};

export default App;
