import React from 'react';
import PropTypes from 'prop-types';

import database from '../Firebase';
import sessionStoreUserName from '../utils/sessionStore';
import PokerCard from './PokerCard';
import { CardDeck } from 'react-bootstrap';

const Result = (props) => {
  const [resultMap, setResultMap] = React.useState(new Map());

  React.useEffect(() => {
    const voteRef = database
      .collection('result')
      .doc('IND-01')
      .collection('users');

    const data = new Map();

    const observer = voteRef.onSnapshot(
      (querySnapshot) => {
        console.log(
          `Received query snapshot of size ${querySnapshot.size}`,
        );

        querySnapshot.forEach((doc) => {
          data.set(doc.id, doc.data().storyPoint);
        });

        if (!compareMaps(data, resultMap)) {
          setResultMap(data);
        }
      },
      (err) => {
        console.log(`Encountered error: ${err}`);
      },
    );

    return () => {
      observer();
    };
  }, [resultMap]);

  const compareMaps = (map1, map2) => {
    var testVal;
    if (map1.size !== map2.size) {
      return false;
    }
    for (var [key, val] of map1) {
      testVal = map2.get(key);
      // in cases of an undefined value, make sure the key
      // actually exists on the object so there are no false positives
      if (
        testVal !== val ||
        (testVal === undefined && !map2.has(key))
      ) {
        return false;
      }
    }
    return true;
  };

  const getStyle = () => {
    return {
      width: '10rem',
      height: '15em',
      background: 'green',
    };
  };

  const getAllCards = () => {
    const cards = [];
    //console.log(cardValues);

    resultMap.forEach((k, v) => {
      cards.push(
        <PokerCard key={v} value={k} style={getStyle()} footer={v} />,
      );
    });

    return cards;
  };

  return (
    <div>
      {resultMap && (
        <CardDeck
          style={{
            flexDirection: 'row',
            marginTop: '10px',
            marginBottom: '20px',
          }}
        >
          {getAllCards()}
        </CardDeck>
      )}
    </div>
  );
};

Result.propTypes = {};

export default Result;
