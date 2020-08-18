import React from 'react';
import { Card } from 'react-bootstrap';

import Team from './team/Team';
import './RighSideCard.css';

const RightPanelTeamStatusCard = ({ style }) => {
  return (
    <Card className="rightCard teamCard" style={style}>
      <Card.Body>
        <Team className="title" />
      </Card.Body>
    </Card>
  );
};

export default RightPanelTeamStatusCard;