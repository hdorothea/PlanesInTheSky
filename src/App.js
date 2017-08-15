import React from 'react';

import './App.css';
import DashboardContainer from './containers/DashboardContainer';
import FilterDashContainer from './containers/FilterDashContainer';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <FilterDashContainer />
        <DashboardContainer />
      </div>
    </div>
  );
}

export default App;
