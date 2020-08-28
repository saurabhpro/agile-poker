import React from 'react';

import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Fab,
  Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import sessionStoreUserName from '../utils/sessionStore';
import signOut from '../auth/SignOut';

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
    //backgroundColor: '#ffac81',
    //backgroundImage:'linear-gradient(315deg, #fff 75%, #ff928b 74%)',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  fab: {
    height: '3em',
    width: '3em',
  },
}));

/**
 * Header Component
 *
 */
const Header = () => {
  const classes = useStyles();

  const [user, setUser] = React.useState(sessionStoreUserName());

  /**
   * clears the session store and then href
   */
  const clearSessionStore = () => {
    signOut();
    setUser(undefined);
  };

  const loggedIn = !!user;

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
          {loggedIn && (
            <div>
              <Profile classes={classes} />
              <Logout
                classes={classes}
                clearSessionStore={clearSessionStore}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

const Logout = ({ classes, clearSessionStore }) => {
  return (
    <Tooltip title="Logout" arrow>
      <IconButton
        //href={`${process.env.PUBLIC_URL}/`}
        onClick={() => clearSessionStore()}
      >
        <Fab color="secondary" className={classes.fab}>
          <ExitToAppIcon />
        </Fab>
      </IconButton>
    </Tooltip>
  );
};

const Profile = ({ classes }) => {
  return (
    <Tooltip title="Profile" arrow>
      <Fab
        color="primary"
        className={classes.fab}
        onClick={() => alert('you found a hidden feature ;)')}
      >
        <AccountCircleIcon />
      </Fab>
    </Tooltip>
  );
};
