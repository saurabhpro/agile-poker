import React from 'react';

import { Col, Row } from 'react-bootstrap';

import CardPanel from './frame/CardPanel';
import RightSidePanel from './frame/RightSidePanel';

const Landing = ({ userName }) => {
  return (
    <div>
      <Row>
        <Col xs={10}>
          <CardPanel />
        </Col>
        <Col xs="auto">
          <RightSidePanel userName={userName} />
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
