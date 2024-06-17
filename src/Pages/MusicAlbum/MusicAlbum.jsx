/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./MusicAlbum.css";
import { CiClock2 } from "react-icons/ci";
import BannerSection from "../../Componets/BannerSection/BannerSection";

const MusicAlbum = () => {

  return (
    <>
      <div className="MusicAlbumm">
        <BannerSection />

        {/* Problem */}
        {/* <div className="topbottomalbumlist">
          <div className="headerlist">
            <ul>
              <div className="Titlei"># Title</div>
              <div className="Titlei">Album</div>
              <div className="Titleiii">Date Added</div>
              <div className="Titleii">
                <CiClock2 />
              </div>
            </ul>
          </div>

          {Playlist.map((i, index) => (
            <SongItemList data={i} id={index} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default MusicAlbum;
