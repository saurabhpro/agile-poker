import React from 'react';
import { Container } from 'react-bootstrap';
import HomePage from './HomePage';
import Landing from './Landing';
import sessionStoreUserName from '../utils/sessionStore';

export default function Dashboard() {
  const userName = sessionStoreUserName();

  return (
    <div>
      {!userName && <HomePage />}

      {userName && (
        <Container
          fluid="md"
          className="ml-6 p-1 flex-fill justify-content-center"
        >
          <Landing userName={userName} />
        </Container>
      )}
    </div>
  );
}
