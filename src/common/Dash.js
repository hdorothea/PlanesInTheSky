import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Dash.css';

export default function Dash({ children, name, icon, className }) {
  return (
    <div className={`dash ${className || ''}`}>
      <div className="top-bar">
        <FontAwesome name={icon.name} className={icon.className} />
        <span className="name">{name}</span>
      </div>
      <div className="content">{children}</div>
    </div>
  );
}
