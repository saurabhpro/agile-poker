import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PokerCard from "../poker-card/PokerCard";

export default class CardPanel extends Component {
  cards = (value) => {
    return <PokerCard value={value} />;
  };

  render() {
    const cardValues = [0, 0.5, 1, 2, 3, 5, 8, 13, 20];
    return (
      <Container>
        <PokerCard value="Infinity" />
        {cardValues.forEach((element) => this.cards(element))}
      </Container>
    );
  }
}
