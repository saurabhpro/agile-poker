import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "./PokerCard.css";
import infinity from "../icon/infinity.svg";

class PokerCard extends Component {
  state = { value: this.props.value };

  render() {
    const value =
      this.state.value !== Infinity ? (
        this.state.value
      ) : (
        <img src={infinity} alt="Infinity"></img>
      );
    return (
      <div>
        <Card
          style={{ width: "10rem", height: "15em" }}
          className="m-1  pokerCard"
          id={this.state.value}
        >
          <Card.Body>
            <h4>{value}</h4>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PokerCard;
