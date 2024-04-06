import React from 'react';

const RadialProgressBar = ({ rating }) => {
  return (
    <div
      className="radial-progress text-primary"
      style={{
        "--value": `${rating * 10}`,
        "--size": "20rem",
        "--thickness": "1rem"
      }}
      role="progressbar"
    >
      <div className="flex justify-between">
        <span className="pt-3 pl-5 mr-2" style={{ fontSize: "5.5rem" }}>
          {rating}
        </span>
        <span className="pt-5" style={{ fontSize: "1rem" }}>
          / 10
        </span>
      </div>
    </div>
  );
};

export default RadialProgressBar;