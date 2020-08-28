import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

import database, { currentTimeStamp } from '../Firebase';
import { addUserNameToSessionStore } from '../utils/sessionStore';
import { FormControl, Select, MenuItem } from '@material-ui/core';

export default function SignIn({ team }) {
  const [userName, setUserName] = React.useState(undefined);
  const [role, setRole] = React.useState('Team Member');
  const [teamId, setTeamId] = React.useState();

  const addTeam = (event) => {
    setTeamId(event.target.value?.toLowerCase());
  };

  const addName = (event) => {
    setUserName(event.target.value);
  };

  const addRole = (event) => {
    setRole(event.target.value);
  };

  /**
   * async method to fetch the user from firebase
   * and if found set it to be online and active
   */
  async function getAndSetUser() {
    const userRef = database
      .collection('users')
      .doc(userName.toUpperCase());
    const doc = await userRef.get();

    if (!doc.exists) {
      setUser();
    } else {
      setUser(doc.data());
    }
  }

  /**
   * aysnc method to update the firebae document with the actived and online user
   * @param {*} doc the firebase document
   */
  const setUser = async (doc) => {
    const t = team ?? teamId;

    const data = doc
      ? updateUserToOnline(doc)
      : createNewUser(userName.toUpperCase(), role, t);

    // Add a new document in collection "cities" with ID 'LA'
    const res = await database
      .collection('users')
      .doc(userName.toUpperCase())
      .set(data);

    console.log('Set logged in user: ', res);
    // allow refreshing the page - and since our update was sucessful - we wil see home page
    window.location.href = `${process.env.PUBLIC_URL}/${t}`;

    console.log(data);
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
          {!team && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              onChange={addTeam}
              fullWidth
              id="team"
              label="Team"
              name="team"
              autoFocus
            />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            onChange={addName}
            fullWidth
            id="email"
            label="User Name"
            name="userName"
            autoComplete="email"
            autoFocus
          />
          {!team && (
            <FormControl className={classes.formControl} fullWidth>
              <Select
                value={role}
                onChange={addRole}
                defaultValue="Team Member"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
                variant="outlined"
              >
                <MenuItem value={'Team Member'}>Team Member</MenuItem>
                <MenuItem value={'Product Owner'}>
                  Product Owner
                </MenuItem>
                <MenuItem value={'Scrum Master'}>
                  Scrum Master
                </MenuItem>
              </Select>
            </FormControl>
          )}

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

export const createNewUser = (userName, role, team) => {
  return {
    userName: userName,
    isOnline: true,
    isActive: true,
    memberSince: currentTimeStamp,
    team: team,
    role: role,
  };
};
