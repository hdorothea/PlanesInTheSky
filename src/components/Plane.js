import React from 'react';
import { keysToIndexApp } from '../utils/ApiUtils';
import countryToCode from '../data/countryToCode';

export default class Plane extends React.Component {
  constructor() {
    super();
    this.state = { mouseOver: false };
    this.toggleMouseOver = this.toggleMouseOver.bind(this);
  }

  toggleMouseOver() {
    this.setState(previousState => ({
      mouseOver: !previousState.mouseOver,
    }));
  }

  render() {
    return (
      <g transform={this.props.transform}>
        <g visibility={this.state.mouseOver ? 'visible' : 'hidden'}>
          <text style={{ fill: 'black' }}>
            {this.props.observation[keysToIndexApp.airlineCountry]}
          </text>
          <text dy="-1em" style={{ fill: 'black' }}>
            {this.props.observation[keysToIndexApp.id]}
          </text>
        </g>
        <image
          xlinkHref={`countries/${countryToCode[
            this.props.observation[keysToIndexApp.airlineCountry]
          ]
            ? countryToCode[this.props.observation[keysToIndexApp.airlineCountry]]
            : this.props.observation[keysToIndexApp.airlineCountry]}.png`}
          width="15"
          height="15"
          onMouseOver={this.toggleMouseOver}
          onMouseOut={this.toggleMouseOver}
        />
      </g>
    );
  }
}
