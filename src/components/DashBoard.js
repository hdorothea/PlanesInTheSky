import React from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';
import FlightInfoDisplay from './FlightInfoDisplay';
import WorldMap from './WorldMap';

const DashBoard = ({ observations }) => (
  <div>
    <FlightInfoDisplay observations={observations} />
    <WorldMap observations={observations} />
  </div>
);

export default DashBoard;
