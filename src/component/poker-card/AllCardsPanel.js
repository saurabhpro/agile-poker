import React, { Component } from "react";
import { Container, CardDeck } from "react-bootstrap";
import PokerCard from "./PokerCard";

export default class AllCardsPanel extends Component {
  state = {
    cardValues: [1, 2, 3, 5, 8, 13, 20, Infinity],
    selectedSP: undefined,
  };

  getAllCards = () => {
    const cards = [];

    this.state.cardValues.forEach((element) =>
      cards.push(
        <PokerCard
          key={element}
          value={element}
          style={this.getStyle(element)}
          onClick={this.lockStoryPointCard}
        />
      )
    );

    return cards;
  };

  lockStoryPointCard = (value) => {
    this.setState({ selectedSP: value, cardValues: [value] });
  };

  getStyle = (value) => {
    return {
      width: "10rem",
      height: "15em",
      disabled: this.state.selectedSP !== value,
    };
  };

  render() {
    const cards = this.getAllCards();

    return (
      <Container>
        <CardDeck>{cards}</CardDeck>
      </Container>
    );
  }
}
