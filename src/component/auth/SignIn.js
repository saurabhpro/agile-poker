import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

import database from '../Firebase';
import { addUserNameToSessionStore } from '../utils/sessionStore';

export default function SignIn() {
  const [userName, setUserName] = React.useState(undefined);

  const onChange = (event) => {
    setUserName(event.target.value);
  };

  /**
   * async method to fetch the user from firebase
   * and if found set it to be online and active
   */
  async function getAndSetUser() {
    const userRef = database.collection('users').doc(userName);
    const doc = await userRef.get();

    if (doc.exists) {
      setUser(doc.data());
    }
  }

  /**
   * aysnc method to update the firebae document with the actived and online user
   * @param {*} doc the firebase document
   */
  const setUser = async (doc) => {
    const data = updateUserToOnline(doc);

    // Add a new document in collection "cities" with ID 'LA'
    const res = await database
      .collection('users')
      .doc(userName)
      .set(data);

    console.log('Set logged in user: ', res);
    // allow refreshing the page - and since our update was sucessful - we wil see home page
    window.location.href = `${process.env.PUBLIC_URL}/`;
  };

  /**
   * handles the form submission from the sign in screen
   * @param {*} event
   */
  const onSubmit = (event) => {
    event.preventDefault();

    if (!!userName) {
      getAndSetUser();

      addUserNameToSessionStore(userName);
    }
  };

  /**
   * material ui classes for sign in screen
   */
  const classes = styles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Agile Poker Table
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            onChange={onChange}
            fullWidth
            id="email"
            label="Email Address"
            name="userName"
            autoComplete="email"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enter
          </Button>
        </form>
      </div>
    </Container>
  );
}

/**
 * Updates the doc to be online and active
 * @param {*} doc
 */
export const updateUserToOnline = (doc) => {
  return {
    userName: doc.userName,
    isOnline: true,
    isActive: true,
    memberSince: doc.memberSince,
    team: doc.team,
    role: doc.role,
  };
};
