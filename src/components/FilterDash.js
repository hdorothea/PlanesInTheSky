import React from 'react';

import ShowModalContainer from '../containers/ShowModalContainer';
import RangeFilterContainer from '../containers/RangeFilterContainer';
import FilterContainer from '../containers/FilterContainer';
import Dash from '../common/Dash';
import './FilterDash.css';


export default function FilterDash() {
  return (
    <div className="filters">
      <Dash className="sidebar-dash" ame="Filter" icon={{ name: 'fa-sliders', className: 'fa fa-sliders' }}>
        <RangeFilterContainer />
        <FilterContainer />
        <ShowModalContainer />
      </Dash>
    </div>
  );
}
