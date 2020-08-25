import React from 'react';
import AllCardsPanel from './poker-card/AllCardsPanel';

export default function CardPanel({currentUser}) {
  return (
    <div>
      <AllCardsPanel currentUser={currentUser}/>
    </div>
  );
}
