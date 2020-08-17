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

export default function SignIn() {
  const [userName, setUserName] = React.useState(undefined);

  const onChange = (event) => {
    setUserName(event.target.value);
  };

  async function getAndSetUser() {
    // [START getAndSetUser]
    const userRef = database.collection('users').doc(userName);
    const doc = await userRef.get();

    if (doc.exists) {
      setUser(doc.data());
    }
    // [END getAndSetUser]
  }

  async function setUser(doc) {
    // [START set_document]
    const data = {
      userName: doc.userName,
      isOnline: true,
      isActive: true,
      memberSince: doc.memberSince,
      team: doc.team,
    };

    // Add a new document in collection "cities" with ID 'LA'
    const res = await database
      .collection('users')
      .doc(userName)
      .set(data);
    // [END set_document]

    sessionStorage.setItem('agilePokerUserName', userName);

    console.log('Set: ', res);
    // allow refreshing the page - and since our update was sucessful - we wil see home page
    window.location.href = `${process.env.PUBLIC_URL}/`;
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (!!userName) {
      getAndSetUser();
    }
  };

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
