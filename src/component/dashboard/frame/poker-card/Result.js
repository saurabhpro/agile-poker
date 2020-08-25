import React from 'react';

import database from '../../../Firebase';
import PokerCard from './PokerCard';
import { CardDeck } from 'react-bootstrap';

import './cards.css';

const Result = ({ currentUser }) => {
  const [resultMap, setResultMap] = React.useState(new Map());

  React.useEffect(() => {
    const voteRef = database
      .collection('result')
      .doc(currentUser.team);

    const data = new Map();

    const observer = voteRef.onSnapshot(
      (doc) => {
        console.log(`Received query snapshot of ${doc.data()}`);

        if (!doc.data().members) {
          window.location.href = `${process.env.PUBLIC_URL}/`;
        }

        doc.data().members.forEach((m) => {
          if (m.member && m.storyPoint) {
            data.set(m.member, m.storyPoint);
          }
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
  }, [resultMap, currentUser.team]);

  const getStyle = () => {
    return {
      width: '10rem',
      height: '15em',
      background: 'black',
      color: 'cyan',
      fontWeight: 'bold',
    };
  };

  const getAllCards = () => {
    const cards = [];
    console.log(resultMap);
    resultMap.forEach((k, v) => {
      console.log(k, v);
      cards.push(
        <PokerCard
          key={v}
          value={k}
          style={getStyle()}
          footer={v.toUpperCase()}
        />,
      );
    });

    return cards;
  };

  return (
    <div>
      {resultMap && resultMap.size > 0 && (
        <CardDeck
          className="cards noHover"
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

const compareMaps = (map1, map2) => {
  let testVal;
  if (map1.size !== map2.size) {
    return false;
  }

  for (const [key, val] of map1) {
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

Result.propTypes = {};

export default Result;
