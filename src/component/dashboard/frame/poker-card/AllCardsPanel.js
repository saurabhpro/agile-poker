import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';

import Result from './Result';
import PokerCard from './PokerCard';

import database from '../../../Firebase';
import sessionStoreUserName from '../../../utils/sessionStore';

import './cards.css';

export default function AllCardsPanel() {
  const userName = sessionStoreUserName();
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
    const res = database
      .collection('result')
      .doc('IND-01')
      .collection('users')
      .doc(userName)
      .set({ storyPoint: value });

    console.log('Stored Result: ', res);

    setShowResult(true);
    setCardValues([value]);
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
        <Result />
      )}
    </div>
  );
}
