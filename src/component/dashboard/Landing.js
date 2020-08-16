import React from 'react';

import { Col, Row } from 'react-bootstrap';

import CardPanel from './frame/CardPanel';
import RightSidePanel from './frame/RightSidePanel';

const Landing = ({ userName }) => {
  return (
    <Row>
      <Col xs={8}>
        <CardPanel />
      </Col>
      <Col xs="auto">
        <RightSidePanel userName={userName} />
      </Col>
    </Row>
  );
};

export default Landing;
