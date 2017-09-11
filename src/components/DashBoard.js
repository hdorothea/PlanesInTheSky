import React from 'react';
import './DashBoard.css';
import FlightInfoDisplay from './FlightInfoDisplay';
import WorldMap from './WorldMap';
import { ContentDash } from '../common/Dashes';
import './DashBoard.css';

const DashBoard = ({ observations, latitudeRangeFilter, longtitudeRangeFilter, showAll }) =>
  (<div className="dash-board">
    <ContentDash name="Flight Information Display" icon={{ name: 'fa-tasks', className: 'fa fa-tasks' }}>
      <FlightInfoDisplay observations={observations} />
    </ContentDash>
    <ContentDash name="Map" icon={{ name: 'fa-map-marker', className: 'fa fa-map-marker' }}>
      <WorldMap
        latitudeRangeFilter={latitudeRangeFilter}
        longtitudeRangeFilter={longtitudeRangeFilter}
        observations={observations}
        showAll={showAll}
      />
    </ContentDash>
  </div>);

export default DashBoard;
