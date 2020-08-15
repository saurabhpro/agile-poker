import React from "react";

import { Col, Row, Container } from "react-bootstrap";

import CardPanel from "./CardPanel";
import RightSidePanel from "./RightSidePanel";

export default function Dashboard() {
  return (
    <Container fluid="sm" className="pr-4 p-1 flex-fill justify-content-center">
      {" "}
      <Row>
        <Col xs={8}>
          <CardPanel />
        </Col>
        <Col md="auto">
          {" "}
          <RightSidePanel />
        </Col>
      </Row>
    </Container>
  );
}
