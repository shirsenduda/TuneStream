/* eslint-disable no-unused-vars */
import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import Rightside from "../Rightside/Rightside";
import './SongDisplay.css'
import Cardtwoo from "../Cardtwoo/Cardtwoo";
const SongDisplay = () => {
  return (
    <>
      <ErrorBoundary>
        <div className="SongsDispalySection">
          <div className="topsongsdisplay">Top Album</div>
          <Cardtwoo/>
          <Cardtwoo/>
          <Cardtwoo/>
          <Cardtwoo/>
          <Cardtwoo/>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default SongDisplay;
