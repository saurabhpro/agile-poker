import React from 'react';
import PropTypes from 'prop-types';

import AllCardsPanel from './poker-card/AllCardsPanel';

export default function CardPanel({ currentUser }) {
  return (
    <div>
      <AllCardsPanel currentUser={currentUser} />
    </div>
  );
}

CardPanel.propTypes = {
  currentUser: PropTypes.object.isRequired,
};
