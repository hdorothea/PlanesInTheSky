import React from 'react';

import ShowModalContainer from '../containers/ShowModalContainer';
import RangeFilterContainer from '../containers/RangeFilterContainer';
import FilterContainer from '../containers/FilterContainer';
import { SideBarDash } from '../common/Dashes';


export default function FilterDash() {
  return (
    <div className="filters">
      <SideBarDash name="Filter" icon={{ name: 'fa-sliders', className: 'fa fa-sliders' }}>
        <RangeFilterContainer />
        <FilterContainer />
        <ShowModalContainer />
      </SideBarDash>
    </div>
  );
}
