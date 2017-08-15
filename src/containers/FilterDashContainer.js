import React from 'react';

import ShowModalContainer from './ShowModalContainer';
import RangeFilterContainer from './RangeFilterContainer';
import FilterContainer from './FilterContainer';
import Dash from '../components/Dash';


export default function FilterDashContainer() {
  return (
    <div className="filters">
      <Dash name="Filter" icon={{ name: 'fa-sliders', className: 'fa fa-sliders' }}>
        <RangeFilterContainer />
        <FilterContainer />
        <ShowModalContainer />
      </Dash>
    </div>
  );
}
