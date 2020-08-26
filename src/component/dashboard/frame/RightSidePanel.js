import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import RightPanelActionCard from './right-panel/RightPanelActionCard';
import RightPanelTeamStatusCard from './right-panel/RightPanelTeamStatusCard';

const style = { border: 'none' };

export default function RightSidePanel({ currentUser }) {
  return (
    <div>
      {currentUser && (
        <Container className="justify-content-center">
          <RightPanelActionCard
            currentUser={currentUser}
            style={style}
          />
          <RightPanelTeamStatusCard style={style} />
        </Container>
      )}
    </div>
  );
}

RightSidePanel.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
