import React from 'react';


const Rect = ({ x0, x1, y0, y1 }) => {
  return (
    <polyline
      fill="none"
      stroke="grey"
      strokeWidth="2"
      points={`${x0}, ${y0}, ${x0}, ${y1}, ${x1}, ${y1}, ${x1}, ${y0}, ${x0}, ${y0}`}
    />
  );
};

// x0 y0, x0 y1, x1 y1, x0 y1, x0 y0


export default Rect;
