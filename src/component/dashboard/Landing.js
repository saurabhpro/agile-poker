import React from 'react';

import { Row } from 'react-bootstrap';

import CardPanel from './frame/CardPanel';
import RightSidePanel from './frame/RightSidePanel';

const Landing = ({ userName }) => {
  return (
    <div
      className="container-md content-justify-center-sm"
      style={{ flexGrow: 3 }}
    >
      <Row>
        <div class="col-sm-9">
          <CardPanel />
        </div>
        <div class="col-md">
          <RightSidePanel userName={userName} />
        </div>
      </Row>
    </div>
  );
};

export default Landing;
