import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import queryString from 'query-string';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import DataFilter from './containers/DataFilter';

function App({ match, location }) {
  return (
    <div id="container">
      <div className="header">
        <div> Planes in the Sky </div>
        <FontAwesome className="fa fa-github" />
        <DataFilter showFilter={match.params.showFilter || 'SHOW_ALL'} contentFilters={queryString.parse(location.search)} />
      </div>
    </div>
  );
}

export default App;
