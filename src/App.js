import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <div> Planes over Brooklyn </div>
        <FontAwesome className="fa fa-github" />

      </div>
    );
  }
}

export default App;
