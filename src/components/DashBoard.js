import React from 'react';
import './DashBoard.css';
import FlightInfoDisplay from './FlightInfoDisplay';
import WorldMap from './WorldMap';
import Dash from '../common/Dash';
import './DashBoard.css';

const DashBoard = ({ observations, latitudeRangeFilter, longtitudeRangeFilter, showAll }) => (
  <div className="content-dash dash-board">
    <Dash
      className="map-dash"
      name="Map"
      icon={{ name: 'fa-map-marker', className: 'fa fa-map-marker' }}
    >
      <WorldMap
        latitudeRangeFilter={latitudeRangeFilter}
        longtitudeRangeFilter={longtitudeRangeFilter}
        observations={observations}
        showAll={showAll}
      />
    </Dash>
    <Dash
      className="content-dash flight-info-dash"
      name="Flight Information Display"
      icon={{ name: 'fa-tasks', className: 'fa fa-tasks' }}
    >
      <FlightInfoDisplay observations={observations} />
    </Dash>
  </div>
);

export default DashBoard;
