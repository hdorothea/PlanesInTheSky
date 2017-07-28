import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlightInfoDisplay.css';

function FlightInfoDisplay({ data }) {
  return (
    <table>
      <tr>
        <td>Id</td>
        <td> Airline Country </td>
      </tr>
      {data.map(datapoint =>
        (<tr>
          {' '}{datapoint.map(value =>
            (<td>
              {' '}{value}
            </td>),
          )}
        </tr>),
      )}
    </table>
  );
}

FlightInfoDisplay.propTypes = {};

FlightInfoDisplay.defaultProps = {};

export default FlightInfoDisplay;
