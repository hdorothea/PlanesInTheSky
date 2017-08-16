import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlightInfoDisplay.css';

import { keysToIndexApp, keysApp } from '../utils/ApiUtils';

class FlightInfoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.updateBounds = this.updateBounds.bind(this);
    this.setInitialState();
  }

  componentWillReceiveProps() {
    this.setInitialState();
  }

  setInitialState() {
    this.state = { startI: 0, endI: this.props.paginationCount };
  }

  updateBounds(next = true) {
    let offset;
    if (next) {
      offset = this.props.paginationCount;
    } else {
      offset = -this.props.paginationCount;
    }
    this.setState((previousState) => {
      const newStartI = previousState.startI + offset;
      const newEndI = newStartI + Math.abs(offset);
      if (newStartI < 0 || newStartI > this.props.observations.length) {
        return previousState;
      }
      return { startI: newStartI, endI: newEndI };
    });
  }

  render() {
    return (
      <div className="flight-info-display">
        <table>
          <tbody>
            <tr>
              {keysApp.map(column =>
                (<th className={column} key={column}>
                  {column.toString().toUpperCase()}
                </th>),
              )}
            </tr>
            {this.props.observations
              .slice(this.state.startI, this.state.endI)
              .map((observation, i) =>
                (<tr key={i}>
                  {observation.map((value, i) =>
                    (<td className={`${keysApp[i]}-cell`} key={`${i}_${observation[keysToIndexApp.id]}`}>
                      {value.toString().toUpperCase()}
                    </td>),
                  )}
                </tr>),
              )}
          </tbody>
        </table>
        <div className="controls">
          <span className="control" onClick={() => this.updateBounds(false)}>
            {' '}&lt;{' '}
          </span>
          <span className="control" onClick={this.updateBounds}>
            {' '}&gt;{' '}
          </span>
        </div>
      </div>
    );
  }
}

FlightInfoDisplay.propTypes = { paginationCount: PropTypes.number };

FlightInfoDisplay.defaultProps = { paginationCount: 15 };

export default FlightInfoDisplay;
