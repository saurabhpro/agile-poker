import React from 'react';
import { Container } from 'react-bootstrap';
import HomePage from './HomePage';
import Landing from './Landing';

export default function Dashboard() {
  const [value, setValue] = React.useState(
    sessionStorage.getItem('agilePokerUserName') || '',
  );
  return (
    <div>
      {!value && <HomePage />}

      {value && (
        <Container
          fluid="sm"
          className="mr-4 p-1 flex-fill justify-content-center"
        >
          <Landing userName={value} logout={setValue} />
        </Container>
      )}
    </div>
  );
}
