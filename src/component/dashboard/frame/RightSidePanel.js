import React from 'react';
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
