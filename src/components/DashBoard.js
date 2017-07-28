import React from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';
import FlightInfoDisplay from './FlightInfoDisplay';

const DashBoard = ({ data }) => (
  <FlightInfoDisplay data={data} />
);

DashBoard.propTypes = { data: PropTypes.array.isRequired };

DashBoard.defaultProps = { };

export default DashBoard;
