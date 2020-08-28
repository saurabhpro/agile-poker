import React from 'react';
import HomePage from './frame/HomePage';
import sessionStoreUserName from '../utils/sessionStore';
import SignIn from '../auth/SignIn';

export default function Dashboard(props) {
  console.log(props?.match?.params?.team);

  const teamName = props?.match?.params?.team;
  const userName = sessionStoreUserName();

  return (
    <div>
      {!!userName ? (
        <HomePage userName={userName} />
      ) : (
        <SignIn team={teamName} />
      )}
    </div>
  );
}
