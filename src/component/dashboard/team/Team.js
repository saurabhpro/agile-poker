import React, { Component } from 'react';

import { FirebaseContext } from '../../Firebase';

export default class Team extends Component {
  render() {
    const SomeComponent = () => (
      <FirebaseContext.Consumer>
        {(firebase) => {
          return (
            <div>I've access to Firebase and render something.</div>
          );
        }}
      </FirebaseContext.Consumer>
    );

    return (
      <div>
        <li>Ram</li>
        <li>Shyam</li>
        <li>ok</li>
      </div>
    );
  }
}
