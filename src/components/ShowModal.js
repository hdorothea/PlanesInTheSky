import React from 'react';

export default function ShowModal({ showAll, toggleShow }) {
  return (
    <div onClick={toggleShow}>
      {' '}{showAll ? 'Show Filtered' : 'Show All'}{' '}
    </div>
  );
}
