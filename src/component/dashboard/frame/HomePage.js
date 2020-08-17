import React from 'react';

import { Row } from 'react-bootstrap';

import CardPanel from './CardPanel';
import RightSidePanel from './RightSidePanel';

const HomePage = ({ userName }) => {
  return (
    <div
      className="container-md content-justify-center-sm"
      style={{ flexGrow: 3 }}
    >
      <Row>
        <div className="col-sm-9">
          <CardPanel />
        </div>
        <div className="col-md">
          <RightSidePanel userName={userName} />
        </div>
      </Row>
    </div>
  );
};

export default HomePage;
