import React from 'react';
import Dash from './Dash';
import './Dashes.css';

function FlexibleDash(DashComponent, className) {
  return props => (
    <div className={className}>
      <DashComponent {...props} />
    </div>
  );
}

export const SideBarDash = FlexibleDash(Dash, 'sidebar-dash');
export const ContentDash = FlexibleDash(Dash, 'content-dash');
