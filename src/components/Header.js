import React from 'react';
import FontAwesome from 'react-fontawesome';

import './Header.css';


export default function Header() {
  return (
    <div className="header">
      <div className="title-container">
        <div className="title">
          {' '}<span>Planes</span>InTheSky{' '}
        </div>
      </div>
      <div className="link-bar">
        <a href="https://github.com/hdorothea/PlanesInTheSky">
          <FontAwesome name="fa-github" className="fa fa-github" />
          Source Code on Github
        </a>
        <a href="https://opensky-network.org/apidoc/rest.html">
          <FontAwesome name="fa-plane" className="fa fa-plane" />
          OpenSky Network API
        </a>
      </div>
    </div>
  );
}
