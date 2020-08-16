import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

import Team from '../team/Team';
import './RighSideCard.css';

const style = { border: 'none' };

export default function RightSidePanel({ userName }) {
  return (
    <div>
      <Container>
        <Card className="rightCard" style={style}>
          <Card.Body>
            <Card.Title className="title">Poker</Card.Title>
            <Card.Text className="text">{userName}</Card.Text>
            <p className="text">Scrum Master</p>
            <Button
              block
              onClick={() => {
                window.location.href = `${process.env.PUBLIC_URL}/`;
              }}
              variant="Link"
            >
              Reset
            </Button>
          </Card.Body>
        </Card>

        <Card className="rightCard teamCard" style={style}>
          <Card.Body>
            <Team className="title" />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
