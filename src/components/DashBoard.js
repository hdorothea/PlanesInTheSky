import React from 'react';
import './DashBoard.css';
import FlightInfoDisplay from './FlightInfoDisplay';
import WorldMap from './WorldMap';

const DashBoard = ({ observations, latitudeBounds, longtitudeBounds }) =>
  (<div id="dash-board-container">
    <FlightInfoDisplay observations={observations} />
    <WorldMap
      latitudeBounds={latitudeBounds}
      longtitudeBounds={longtitudeBounds}
      observations={observations}
    />
  </div>);

export default DashBoard;
