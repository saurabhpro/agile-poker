import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'react-bootstrap';

import CardPanel from './frame/CardPanel';
import RightSidePanel from './frame/RightSidePanel';

const Landing = (props) => {
  return (
    <div>
      <Row>
        <Col xs={8}>
          <CardPanel />
        </Col>
        <Col md="auto">
          <RightSidePanel
            userName={props.userName}
            logout={props.logout}
          />
        </Col>
      </Row>
    </div>
  );
};

Landing.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Landing;
