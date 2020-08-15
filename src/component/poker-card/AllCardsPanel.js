import React, { Component } from "react";
import { Container, CardDeck } from "react-bootstrap";
import PokerCard from "./PokerCard";

export default class AllCardsPanel extends Component {
  state = { cardValues: [0, 0.5, 1, 2, 3, 5, 8, 13, 20, Infinity] };

  getAllCards = () => {
    const cards = [];

    this.state.cardValues.forEach((element) =>
      cards.push(<PokerCard key={element} value={element} />)
    );

    return cards;
  };

  render() {
    console.log(this.state.cardValues);

    const cards = this.getAllCards();

    return (
      <Container>
        <CardDeck>{cards}</CardDeck>
      </Container>
    );
  }
}
