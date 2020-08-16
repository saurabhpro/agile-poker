import React from 'react';
import HomePage from './HomePage';
import Landing from './Landing';
import sessionStoreUserName from '../utils/sessionStore';

export default function Dashboard() {
  const userName = sessionStoreUserName();

  return (
    <div>
      {!userName && <HomePage />}

      {userName && (
        <div>
          <Landing userName={userName} />
        </div>
      )}
    </div>
  );
}
