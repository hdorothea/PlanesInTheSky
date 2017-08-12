import React from 'react';
import FontAwesome from 'react-fontawesome';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import DashboardContainer from './containers/DashboardContainer';
import FilterContainer from './containers/FilterContainer';
import ShowModalContainer from './containers/ShowModalContainer';
import RangeFilterContainer from './containers/RangeFilterContainer';

function App() {
  return (
    <div id="app-container">
      <div id="app-header">
        <div className="title">
          {' '}<span>Planes</span>InTheSky{' '}
        </div>
        <div className="link-bar">
          <a href="https://github.com/hdorothea/PlanesInTheSky">
            <FontAwesome name="fa-github" className="fa fa-github" />
            Source Code on Github
          </a>
          <a href="https://opensky-network.org/apidoc/rest.html">
            <FontAwesome name="fa-plane" className="fa fa-plane" />
            Open Sky Network Api
          </a>
        </div>
      </div>
      <div className="app-content">
        <div className="app-all-filters">
          <RangeFilterContainer />
          <FilterContainer />
          <ShowModalContainer />
        </div>
        <DashboardContainer />
      </div>
    </div>
  );
}

export default App;
