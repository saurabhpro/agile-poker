import React, { useState, useEffect } from 'react';

import database from '../../Firebase';
import sessionStoreUserName from '../../utils/sessionStore';
import TeamMember from './TeamMember';

import './Team.css';

const Team = ({ className }) => {
  const userName = sessionStoreUserName();
  const [teamName, setTeamName] = useState(undefined);

  useEffect(() => {
    let team = undefined;
    database
      .collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, ' => ', doc.data());
          if (!teamName && doc.id === userName) {
            team = doc.data().team.toUpperCase();
          }
        });
      })
      .then(() => !teamName && setTeamName(team));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

Team.propTypes = {};

export default Team;
