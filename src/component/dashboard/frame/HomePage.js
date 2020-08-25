import React from 'react';

import { Row } from 'react-bootstrap';

import CardPanel from './CardPanel';
import RightSidePanel from './RightSidePanel';
import { getCurrentlyLoggedInUserDetails } from '../../utils/firebaseDb';

const HomePage = ({ userName }) => {
  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    const getCurrentUser = () => {
      getCurrentlyLoggedInUserDetails(userName).then((usr) =>
        setCurrentUser(usr),
      );
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
      <Row>
        <div className="col-sm-9">
          <CardPanel currentUser={currentUser}/>
        </div>
        <div className="col-md">
          <RightSidePanel currentUser={currentUser} />
        </div>
      </Row>
    </div>
  );
};

export default HomePage;
