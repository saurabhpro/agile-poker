import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import './PokerCard.css';
import infinity from './icon/infinity.svg';

class PokerCard extends Component {
  state = {
    value: {
      storyPoint: this.props.value,
      style: this.props.style,
    },
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  getDisplayableValue = () => {
    return this.state.value.storyPoint !== 'Infinity' ? (
      this.state.value.storyPoint
    ) : (
      <Card.Img variant="center" src={infinity} alt="Infinity" />
    );
  };

  onClick = (value) => {
    this.props.onClick && this.props.onClick(value);
  };

  render() {
    const storePoint = this.getDisplayableValue();
    const { value } = this.state;

    return (
      <div>
        <Card
          style={value.style}
          className="m-1 pokerCard"
          id={value.storyPoint}
          onClick={() => this.onClick(value.storyPoint)}
        >
          <Card.Body>
            <h4>{storePoint}</h4>
          </Card.Body>
          {this.props.footer && (
            <Card.Footer className="pokerCard__footer">
              {this.props.footer}
            </Card.Footer>
          )}
        </Card>
      </div>
    );
  }
}

export default PokerCard;
