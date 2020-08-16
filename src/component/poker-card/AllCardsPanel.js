import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';

import PokerCard from './PokerCard';

import database from '../Firebase';

export default function AllCardsPanel() {
  const [cardValues, setCardValues] = useState([]);
  const [selectedSP, setSelectedSP] = useState(undefined);

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
    //console.log(cardValues);

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
    <CardDeck
      style={{
        flexDirection: 'row',
        marginTop: '10px',
        marginBottom: '20px',
      }}
    >
      {getAllCards()}
    </CardDeck>
  );
}
