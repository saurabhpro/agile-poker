import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './RighSideCard.css';
import { removeTasksOfTeam } from '../../../utils/firebaseDb';
import TaskIdManager from './TaskIdManager';

const RightPanelActionCard = ({ currentUser, style }) => {
  const [showReset, setShowReset] = React.useState(false);

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

        <Card.Text className="text">{currentUser.userName}</Card.Text>

        <p className="text">
          {currentUser.role
            ? currentUser.role.toUpperCase()
            : 'TEAM MEMBER'}
        </p>

        <TaskIdManager
          team={currentUser.team}
          role={currentUser.role.toUpperCase()}
          setShowReset={setShowReset}
        />

        {showReset &&
          currentUser.role.toUpperCase() !== 'TEAM MEMBER' && (
            <div>
              {' '}
              <Button block onClick={() => reset()} variant="light">
                Reset
              </Button>
            </div>
          )}
      </Card.Body>
    </Card>
  );
};

RightPanelActionCard.propTypes = {
  currentUser: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
};

export default RightPanelActionCard;
