import React from 'react';

import './App.css';
import DashboardContainer from './containers/DashboardContainer';
import FilterDash from './components/FilterDash';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <FilterDash />
        <DashboardContainer />
      </div>
    </div>
  );
}

export default App;
