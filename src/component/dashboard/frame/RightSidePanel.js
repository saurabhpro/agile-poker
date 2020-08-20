import React from 'react';
import { Container } from 'react-bootstrap';

import { getCurrentlyLoggedInUserDetails } from '../../utils/firebaseDb';
import RightPanelActionCard from './right-panel/RightPanelActionCard';
import RightPanelTeamStatusCard from './right-panel/RightPanelTeamStatusCard';

const style = { border: 'none' };

export default function RightSidePanel({ userName }) {
  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    const getCurrentUser = () => {
      getCurrentlyLoggedInUserDetails(userName).then((usr) =>
        setCurrentUser(usr),
      );
    };

    if (!currentUser) {
      getCurrentUser();
    }
  }, [currentUser, userName]);

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
