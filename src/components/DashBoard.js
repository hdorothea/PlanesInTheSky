import React from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';
import FlightInfoDisplay from './FlightInfoDisplay';

const DashBoard = ({ observations }) => (
  <FlightInfoDisplay observations={observations} />
);

export default DashBoard;
