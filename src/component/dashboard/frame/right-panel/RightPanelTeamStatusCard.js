import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

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

RightPanelTeamStatusCard.propTypes = {
  style: PropTypes.object.isRequired,
};

export default RightPanelTeamStatusCard;
