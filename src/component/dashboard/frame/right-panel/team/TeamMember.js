import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

import { Tooltip } from '@material-ui/core';
import database from '../../../../Firebase';
import './TeamMember.css';
import { arrayObjectEquals } from '../../../../utils/compareArrayObject';

const TeamMemberDetail = ({ usr }) => {
  return (
    <div className="teamMember">
      <div className="teamMember__details">
        <p className="text-capitalize">{usr.userName}</p>
        <span>
          {usr.isOnline
            ? onlineNotification()
            : offlineNotification()}
        </span>
      </div>
    </div>
  );
};

TeamMemberDetail.propTypes = {
  usr: PropTypes.object.isRequired,
};

const offlineNotification = () => {
  return (
    <Tooltip title="offline" placement="right-start">
      <NotInterestedIcon className="teamMember__offline" />
    </Tooltip>
  );
};

const onlineNotification = () => {
  return (
    <Tooltip title="connected" placement="right-start">
      <ImportantDevicesIcon className="teamMember__online" />
    </Tooltip>
  );
};

export default function TeamMember({ team }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const tmp = [];

    const unsubscribe = database
      .collection('users')
      .onSnapshot((snapshot) => {
        snapshot.docs
          .map((point) => point.data())
          .filter((doc) => doc.team.toUpperCase() === team)
          .forEach((doc) => {
            // add all data to an array - TODO sometmes double entries are loaded here
            tmp.push(doc);
          });

        if ((!users && tmp) || !arrayObjectEquals(users, tmp)) {
          console.log(users, '=>', tmp);
          setUsers(tmp);
        }
      });

    return () => {
      // this is the cleanup of listeners
      unsubscribe(); //it'll detach the listeners
    };
  }, [users, team]);

  return (
    <div>
      {users
        .filter(
          (usr) => usr.isActive && usr.team.toUpperCase() === team,
        )
        .slice(0, 7) // max 7 users visible on side pane
        // .filter((usr) => usr.team === getUserName)
        .map((usr) => (
          <TeamMemberDetail key={usr.userName} usr={usr} />
        ))}
    </div>
  );
}

TeamMember.propTypes = {
  team: PropTypes.string.isRequired,
};
