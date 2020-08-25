import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './RighSideCard.css';
import { removeTasksOfTeam } from '../../../utils/firebaseDb';
import TaskIdManager from './TaskIdManager';

const RightPanelActionCard = ({ currentUser, style }) => {
  const reset = () => {
    removeTasksOfTeam(currentUser.team, '')
      .then(() => {
        window.location.href = `${process.env.PUBLIC_URL}/`;
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
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

        <TaskIdManager
          team={currentUser.team}
          role={currentUser.role.toUpperCase()}
        />

        {(currentUser.role.toUpperCase() === 'SCRUM MASTER' ||
          currentUser.role.toUpperCase() === 'PRODUCT OWNER') && (
          <div>
            {' '}
            <Button block onClick={() => reset()} variant="Link">
              Reset
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default RightPanelActionCard;
