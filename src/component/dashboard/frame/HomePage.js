import React from 'react';
import PropTypes from 'prop-types';

import { Row } from 'react-bootstrap';

import CardPanel from './CardPanel';
import RightSidePanel from './RightSidePanel';
import {
  getCurrentlyLoggedInUserDetails,
  setUserToOnline,
} from '../../utils/firebaseDb';

const HomePage = ({ userName }) => {
  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    const getCurrentUser = () => {
      getCurrentlyLoggedInUserDetails(userName).then((usr) => {
        setCurrentUser(usr);
        if (!usr.isOnline) {
          setUserToOnline(userName);
        }
      });
    };

    if (!currentUser) {
      getCurrentUser();
    }
  }, [currentUser, userName]);

  return (
    <div
      className="container-md content-justify-center-sm"
      style={{ flexGrow: 3 }}
    >
      {currentUser && (
        <Row>
          <div className="col-sm-9">
            <CardPanel currentUser={currentUser} />
          </div>
          <div className="col-md">
            <RightSidePanel currentUser={currentUser} />
          </div>
        </Row>
      )}
    </div>
  );
};

CardPanel.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default HomePage;
