import React from 'react';
import { Container } from 'react-bootstrap';

import { getCurrentlyLoggedInUserDetails } from '../../utils/firebaseDb';
import RightPannelActionCard from './right-panel/RightPannelActionCard';
import RightPannelTeamStatusCard from './right-panel/RightPannelTeamStatusCard';

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
          <RightPannelActionCard
            currentUser={currentUser}
            style={style}
          />
          <RightPannelTeamStatusCard style={style} />
        </Container>
      )}
    </div>
  );
}
