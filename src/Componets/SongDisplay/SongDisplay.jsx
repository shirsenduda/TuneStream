/* eslint-disable no-unused-vars */
import React from "react";
import ErrorBoundary from "../ErrorBoundary";
const SongDisplay = () => {
  return (
    <>
      <ErrorBoundary>
        <div className="SongsDispalySection">
          <div className="topsongsdisplay">Top Album</div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default SongDisplay;
