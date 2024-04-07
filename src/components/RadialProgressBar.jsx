import React from "react";

const getRating = (responseData) => {
  let rating = 7;
  if (responseData) {
    const match = responseData.match(/\d/);
    if (match) {
      rating = match[0] === "1" ? 10 : parseInt(match[0], 10);
    }
  }
  return rating;
};

const Radial = ({ rating }) => {
  return (
    <div
      className="radial-progress text-primary"
      style={{
        "--value": `${rating * 10}`,
        "--size": "20rem",
        "--thickness": "1rem",
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

const RadialProgressBar = ({ responseData, isLoading }) => {
  return (
    <div className="flex text-white outline outline-1 outline-white/20 outline-offset-4 rounded-3xl items-center justify-center mt-3 h-[60vh]">
      {!responseData && <Radial rating={0} />}
      {responseData && !isLoading && (
        <Radial rating={getRating(responseData)} />
      )}
    </div>
  );
};

export default RadialProgressBar;
