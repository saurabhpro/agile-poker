import React, { useState, useEffect } from 'react';

import TeamMember from './TeamMember';

import './Team.css';
import { getCurrentlyLoggedInUserDetails } from '../../../../utils/firebaseDb';

const Team = ({ className }) => {
  const [teamName, setTeamName] = useState();

  useEffect(() => {
    const getTeam = () =>
      getCurrentlyLoggedInUserDetails().then((usr) =>
        setTeamName(usr.team.toUpperCase()),
      );

    if (!teamName) {
      getTeam();
    }
  }, [teamName]);

  return (
    <div>
      {teamName && (
        <div className="team">
          <div className="team__title">
            <h5
              className={className}
            >{`${teamName.toUpperCase()}`}</h5>
          </div>

          <TeamMember team={teamName} />
        </div>
      )}
    </div>
  );
};

export default Team;
