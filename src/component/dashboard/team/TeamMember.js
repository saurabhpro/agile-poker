import React, { useState, useEffect } from 'react';

import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { Tooltip } from '@material-ui/core';

import database from '../../Firebase';

import './TeamMember.css';

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

        if ((!users && tmp) || !ArrayObjectEquals(users, tmp)) {
          console.log(users, '=>', tmp);
          setUsers(tmp);
        }
      });

    return () => {
      // this is the cleanup of listeners
      unsubscribe(); //it'll detach the listeners
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

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

const TeamMemberDetail = ({ usr }) => {
  return (
    <div className="teamMember">
      <div className="teamMember__details">
        <p>{usr.userName.toUpperCase()}</p>
        <span>
          {usr.isOnline
            ? onlineNotification()
            : offlineNotification()}
        </span>
      </div>
    </div>
  );
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

const ArrayObjectEquals = (oldArr, newArr) => {
  if (oldArr.length !== newArr.length) {
    return false;
  }

  let result = true;

  oldArr.forEach((o) => {
    newArr.forEach((n) => {
      let rv = true;
      if (o.userName === n.userName) {
        rv = rv && n['isOnline'] === o['isOnline'];
        if (!rv) {
          console.log(
            'isOnline',
            ' ',
            n['isOnline'],
            ' ',
            o['isOnline'],
          );
        }
      }

      result = result && rv;
    });
  });

  return result;
};
