import React from 'react';

import ShowModalContainer from './ShowModalContainer';
import RangeFilterContainer from './RangeFilterContainer';
import FilterContainer from './FilterContainer';
import SidebarDash from '../components/SidebarDash';


export default function FilterDashContainer() {
  return (
    <div className="filters">
      <SidebarDash name="Filter" icon={{ name: 'fa-sliders', className: 'fa fa-sliders' }}>
        <RangeFilterContainer />
        <FilterContainer />
        <ShowModalContainer />
      </SidebarDash>
    </div>
  );
}
