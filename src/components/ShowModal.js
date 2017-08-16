import React from 'react';
import './ShowModal.css';

export default function ShowModal({ showAll, toggleShow }) {
  return (
    <div className="show-modal" onClick={toggleShow}>
      {' '}{showAll ? 'Show Filtered' : 'Show All'}{' '}
    </div>
  );
}
