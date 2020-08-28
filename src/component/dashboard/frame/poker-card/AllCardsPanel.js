import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { CardDeck } from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Result from './Result';
import PokerCard from './PokerCard';
import database from '../../../Firebase';
import './cards.css';
import { getTaskForTeam } from '../../../utils/firebaseDb';
import { Tooltip } from '@material-ui/core';

export default function AllCardsPanel({ currentUser }) {
  const [cardValues, setCardValues] = useState([]);
  const [selectedSP, setSelectedSP] = useState(undefined);
  const [showResult, setShowResult] = useState(false);

  // cardValues: [1, 2, 3, 5, 8, 13, 20, Infinity],
  // selectedSP: undefined,

  useEffect(() => {
    const unsubscribe = database
      .collection('points')
      .onSnapshot((snapshot) => {
        const sp = snapshot.docs.map((point) => point.data().numeric);
        setCardValues(sp[0]);
      });

    return () => {
      // this is the cleanup of listeners
      unsubscribe(); //it'll detach the listeners
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lockStoryPointCard = (value) => {
    setSelectedSP(value);

    // Add a new document in collection "result/task/users" with ID 'userName'

    getTaskForTeam(currentUser.team).then((task) => {
      console.log(task);
      if (task && task.taskId) {
        // Add a new document in collection "result/team/members(map)" with ID 'userName'
        database
          .collection('result')
          .doc(currentUser.team)
          .set(
            {
              members: [
                ...task.members,
                { member: currentUser.userName, storyPoint: value },
              ],
            },
            { merge: true },
          )
          .then(() => {
            console.log('Stored Result of pokering');
          });

        setShowResult(true);
        setCardValues([value]);
      }
    });
  };

  const getStyle = (value) => {
    return {
      width: '10rem',
      height: '15em',
      disabled: selectedSP !== value,
    };
  };

  const getAllCards = () => {
    const cards = [];

    cardValues
      .sort((a, b) => a - b)
      .forEach((element) => {
        cards.push(
          <PokerCard
            key={element}
            value={element}
            style={getStyle(element)}
            onClick={lockStoryPointCard}
          />,
        );
      });

    return cards;
  };

  return (
    <div>
      {!showResult &&
        currentUser?.role.toUpperCase() === 'PRODUCT OWNER' && (
          <Tooltip title="Show Result">
            <IconButton
              color="secondary"
              className="float-right"
              style={{ borderColor: 'black' }}
              onClick={() => setShowResult(true)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        )}

      {!showResult ? (
        <CardDeck
          className="cards"
          style={{
            flexDirection: 'row',
            marginTop: '10px',
            marginBottom: '20px',
          }}
        >
          {getAllCards()}
        </CardDeck>
      ) : (
        <Result currentUser={currentUser} />
      )}
    </div>
  );
}

AllCardsPanel.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
