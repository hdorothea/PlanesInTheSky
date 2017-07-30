import React from 'react';
import FontAwesome from 'react-fontawesome';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import DataFilter from './containers/DataFilter';

function App() {
  return (
    <div id="container">
      <div className="header">
        <div> Planes in the Sky </div>
        <a href="https://github.com/hdorothea/PlanesInTheSky">
          <FontAwesome name="fa-github" className="fa fa-github" />
        </a>
        <DataFilter />
      </div>
    </div>
  );
}

export default App;
