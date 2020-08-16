import React, { useState, useEffect } from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import PokerCard from './PokerCard';
import Firebase from '../Firebase';

export default function AllCardsPanel() {
  const [cardValues, setCardValues] = useState([]);
  const [selectedSP, setSelectedSP] = useState(undefined);

  // cardValues: [1, 2, 3, 5, 8, 13, 20, Infinity],
  //   selectedSP: undefined,

  useEffect(() => {
    new Firebase().database
      .collection('points')
      .onSnapshot((snapshot) => {
        const sp = snapshot.docs.map((point) => point.data().numeric);
        setCardValues(sp[0]);
      });
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
    console.log(cardValues);

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
    <Container>
      <CardDeck>{getAllCards()}</CardDeck>
    </Container>
  );
}
