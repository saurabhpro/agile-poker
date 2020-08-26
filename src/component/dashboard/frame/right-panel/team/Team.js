import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
          <div className="mb-2 team__title">
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

Team.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Team;
