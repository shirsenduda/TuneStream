/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./Home.css";
import TopNavv from "../../Componets/TopNavv/TopNavv";
import { Route, Routes, useLocation } from "react-router-dom";
import SongDisplay from "../../Componets/SongDisplay/SongDisplay";
import PlayPause from "../../Componets/PlayPause/PlayPause";
import SongsItempage from "../../Pages/SongsItempage/SongsItempage";
import { Musicdata } from "../../MusicProvider/MusicProvider";
import MusicAlbum from "../MusicAlbum/MusicAlbum";
import LibrarySection from "../LibrarySection/LibrarySection";
import Rightside from "../../Componets/Rightside/Rightside";
// eslint-disable-next-line react/prop-types
const Home = ({sidebardesktopfunction}) => {
  const displayRef = useRef();
  const location = useLocation();
  const Album = location.pathname.includes("MusicAlbum");
  const AlbumId = Album ? location.pathname.slice(-1) : "";
  const bgColor = Musicdata[Number(AlbumId)].bgColor;
  const backgroundColor = "#6d4766";
  useEffect(() => {
    if (Album) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.background = `linear-gradient(${backgroundColor},#121212)`;
    }
  });
  return (
    <>
      <div className="home" ref={displayRef}>
        <Routes>
          <Route path="/" element={<SongDisplay sidebardesktopfunctionn={sidebardesktopfunction}/>} />
          <Route path="/MusicAlbum/:id" element={<MusicAlbum sidebardesktopfunctionn={sidebardesktopfunction}/>} />
          <Route path="/SongItem/:id" element={<SongsItempage />} />
          <Route path="/Library" element={<LibrarySection sidebardesktopfunctionn={sidebardesktopfunction}/>} />
        </Routes>

        <PlayPause />
      </div>
    </>
  );
};

export default Home;
