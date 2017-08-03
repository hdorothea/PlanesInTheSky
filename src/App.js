import React from 'react';
import FontAwesome from 'react-fontawesome';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import DashboardContainer from './containers/DashboardContainer';
import FilterContainer from './containers/FilterContainer';

function App() {
  return (
    <div id="container">
      <div className="header">
        <div> Planes in the Sky </div>
        <a href="https://github.com/hdorothea/PlanesInTheSky">
          <FontAwesome name="fa-github" className="fa fa-github" />
        </a>
      </div>
      <FilterContainer />
      <DashboardContainer />
    </div>
  );
}

export default App;
