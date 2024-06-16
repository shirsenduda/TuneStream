/* eslint-disable no-unused-vars */
import React from "react";
import "swiper/css";
import "./BannerSection.css";
import { useParams } from "react-router-dom";
import { IoIosMusicalNotes } from "react-icons/io";
import { Musicdata } from "../../MusicProvider/MusicProvider";
const BannerSection = () => {

  const { id } = useParams();
  const albumData = Musicdata[id];
  return (
    <>
      <div className="bannerSection">
        <div className="topalbum">
          <div className="albumimgg">
            <img src={albumData.musicImg} alt="" />
          </div>
          <div className="albumname">
            <p className="public">Public Playlist</p>
            <h2 className="hit">{albumData.musicAlbumGroup}</h2>
            <p className="public">{albumData.musicAlbumDescription}</p>
            <div className="madeByYou">
              <div className="spotifyicon">
                <IoIosMusicalNotes />
              </div>
              <h5>Made for You . 10 songs, about 1 hr 20 min</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
