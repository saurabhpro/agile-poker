import React from 'react';
import PropTypes from 'prop-types';
import { CardDeck } from 'react-bootstrap';

import database from '../../../Firebase';
import PokerCard from './PokerCard';
import './cards.css';
import { compareMaps } from '../../../utils/mapCompare';

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
      //backgroundImage:  'linear-gradient(to bottom right, #add8e6, white)',
      background: '#0047ab',
      color: 'white',
      fontWeight: 'bold',
    };
  };

  const getAllCards = () => {
    const cards = [];
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

Result.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default Result;
