/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import Rightside from "../Rightside/Rightside";
import "./SongDisplay.css";
import Cardtwoo from "../Cardtwoo/Cardtwoo";
import TopNavv from "../TopNavv/TopNavv";

const SongDisplay = ({sidebardesktopfunctionn}) => {
  return (
    <>
      <ErrorBoundary>
        <div className="mainHomefirst">
          <div className="songsAlbumlistt">
            <TopNavv sidebardesktopfunctionclick={sidebardesktopfunctionn}/>
            <div className="topsongsdisplay">Top Album</div>
            <div className="SongsDispalySectionone">
              <Cardtwoo />
              <Cardtwoo />
              <Cardtwoo />
              <Cardtwoo />
              <Cardtwoo />
              <Cardtwoo />
              <Cardtwoo />
              
            </div>
          </div>
          <Rightside />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default SongDisplay;
