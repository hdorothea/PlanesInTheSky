import React from 'react';
import Dash from './Dash';
import './SidebarDash.css';

function SideBarDash(DashComponent) {
  return props => (
    <div className="sidebar-dash">
      <DashComponent {...props} />
    </div>);
}

export default SideBarDash(Dash);
