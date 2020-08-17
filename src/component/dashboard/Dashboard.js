import React from 'react';
import HomePage from './HomePage';
import sessionStoreUserName from '../utils/sessionStore';
import SignIn from '../auth/SignIn';

export default function Dashboard() {
  const userName = sessionStoreUserName();

  return (
    <div>
      {userName ? <HomePage userName={userName} /> : <SignIn />}
    </div>
  );
}
