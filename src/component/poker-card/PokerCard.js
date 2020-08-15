import React from "react";
import { Card } from "react-bootstrap";

export default function PokerCard({ value }) {
  return (
    <div>
      <Card style={{ width: "10rem" }}>
        <Card.Body>
          <Card.Title>{value}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
