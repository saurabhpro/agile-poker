import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import Team from '../team/Team';

const style = { width: '18rem', margin: '1em', border: 'none' };

export default function RightSidePanel({ userName }) {
  return (
    <div>
      <Container>
        <Card style={style}>
          <Card.Body>
            <Card.Title>Current User</Card.Title>
            {userName}
          </Card.Body>
        </Card>

        <Card style={style}>
          <Card.Body>
            <Card.Title>Team</Card.Title>
            <Team />
          </Card.Body>
        </Card>

        <Card style={style}>
          <Card.Body>
            <Card.Title>Poker</Card.Title>
            <Card.Text>Just select one</Card.Text>
            <Button variant="primary">Reset</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
