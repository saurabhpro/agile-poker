import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "./PokerCard.css";
import infinity from "../icon/infinity.svg";

class PokerCard extends Component {
  state = { value: this.props.value };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  getDisplayableValue = () => {
    return this.state.value !== Infinity ? (
      this.state.value
    ) : (
      <img src={infinity} alt="Infinity"></img>
    );
  };

  onClick = (value) => {
    alert("you clicked " + value);
  };

  render() {
    const value = this.getDisplayableValue();

    return (
      <div>
        <Card
          style={{ width: "10rem", height: "15em" }}
          className="m-1  pokerCard"
          id={this.state.value}
          onClick={() => this.onClick(this.state.value)}
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
