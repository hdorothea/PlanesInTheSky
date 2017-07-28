import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlightInfoDisplay.css';

import { keysToIndexApp } from '../utils/ApiUtils';

class FlightInfoDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.updateBounds = this.updateBounds.bind(this);
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
      if (newStartI < 0 || newStartI > this.props.data.length) {
        return previousState;
      }
      return { startI: newStartI, endI: newEndI };
    });
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {Object.keys(keysToIndexApp).map(column =>
                (<th key={column}>
                  {column}
                </th>),
              )}
            </tr>
            {this.props.data.slice(this.state.startI, this.state.endI).map((datapoint, i) =>
              (<tr key={i}>
                {datapoint.map((value, i) =>
                  (<td key={`${i}_${datapoint[keysToIndexApp.id]}`}>
                    {value}
                  </td>),
                )}
              </tr>),
            )}
          </tbody>
        </table>
        <div onClick={() => this.updateBounds(false)}> &lt; </div>
        <div onClick={this.updateBounds}> &gt; </div>
      </div>
    );
  }
}

FlightInfoDisplay.propTypes = { paginationCount: PropTypes.number };

FlightInfoDisplay.defaultProps = { paginationCount: 20 };

export default FlightInfoDisplay;
