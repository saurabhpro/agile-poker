import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Agile Poker
          </Typography>
          <nav>
            {
              //   <Link
              //   variant="button"
              //   color="textPrimary"
              //   href="#"
              //   className={classes.link}
              // >
              //   Support
              // </Link>
            }
          </nav>

          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {};

export default Header;
