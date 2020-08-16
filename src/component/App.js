import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from './dashboard/Dashboard';
import { Box } from '@material-ui/core';
import Copyright from './dashboard/Copyright';
import Header from './header/Header';

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <body>
        <Dashboard />
      </body>

      <footer>
        <Box mt={8}>
          <Copyright />
        </Box>
      </footer>
    </div>
  );
};

export default App;
