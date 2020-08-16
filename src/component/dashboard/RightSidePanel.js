import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import Team from './team/Team';

const style = { width: '18rem', margin: '1em', border: 'none' };

export default function RightSidePanel() {
  return (
    <div>
      <Row>
        <Card style={style}>
          <Card.Body>
            <Card.Title>Team</Card.Title>

            <Team />
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card style={style}>
          <Card.Body>
            <Card.Title>Poker</Card.Title>
            <Card.Text>Just select one</Card.Text>
            <Button variant="primary">Reset</Button>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}
