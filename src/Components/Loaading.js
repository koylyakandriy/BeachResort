import React from "react";

import spinner from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data loading...</h4>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Loading;
