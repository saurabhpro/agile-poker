import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './card.css';
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
      <Card.Img
        className="pokerCard__infinity"
        variant="center"
        src={infinity}
        alt="Infinity"
      />
    );
  };

  onClick = (value) => {
    this.props.onClick && this.props.onClick(value);
  };

  render() {
    const storyPoint = this.getDisplayableValue();
    const { value } = this.state;

    return (
      <div>
        <Card
          style={value.style}
          className="m-2 pokerCard"
          id={value.storyPoint}
          onClick={() => this.onClick(value.storyPoint)}
        >
          <Card.Body>
            <h4>{storyPoint}</h4>
          </Card.Body>
          {this.props.footer && (
            <p className="pokerCard__footer">{this.props.footer}</p>
          )}
        </Card>
      </div>
    );
  }
}

PokerCard.propTypes = {
  // value: PropTypes.string.isRequired, is number or string
  style: PropTypes.object.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default PokerCard;
