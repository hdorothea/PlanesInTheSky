import React from 'react';
import './DashBoard.css';
import FlightInfoDisplay from './FlightInfoDisplay';
import WorldMap from './WorldMap';
import Dash from './Dash';

const DashBoard = ({ observations, latitudeRangeFilter, longtitudeRangeFilter, showAll }) =>
  (<div id="dash-board-container">
    <Dash name="Flight Information Display" icon={{ name: 'fa-tasks', className: 'fa fa-tasks' }}>
      <FlightInfoDisplay observations={observations} />
    </Dash>
    <Dash name="Map" icon={{ name: 'fa-map-marker', className: 'fa fa-map-marker' }}>
      <WorldMap
        latitudeRangeFilter={latitudeRangeFilter}
        longtitudeRangeFilter={longtitudeRangeFilter}
        observations={observations}
        showAll={showAll}
      />
    </Dash>
  </div>);

export default DashBoard;
