import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './RighSideCard.css';
import { removeAllTaskStoryPoints } from '../../../utils/firebaseDb';

const RightPannelActionCard = ({ currentUser, style }) => {
  const reset = () => {
    removeAllTaskStoryPoints('IND-01');
    window.location.href = `${process.env.PUBLIC_URL}/`;
  };

  return (
    <Card className="rightCard" style={style}>
      <Card.Body>
        <Card.Title className="title">Poker</Card.Title>

        <Card.Text className="text">
          {currentUser.userName.toUpperCase()}
        </Card.Text>

        <p className="text">
          {currentUser.role
            ? currentUser.role.toUpperCase()
            : 'TEAM MEMBER'}
        </p>

        {(currentUser.role.toUpperCase() === 'SCRUM MASTER' ||
          currentUser.role.toUpperCase() === 'PRODUCT OWNER') && (
          <Button block onClick={() => reset()} variant="Link">
            Reset
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default RightPannelActionCard;
