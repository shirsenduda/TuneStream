/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Rightside.css";
import { RxCross2 } from "react-icons/rx";
import { CiMusicNote1 } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import Artist from "../Artist/Artist";
import { ArtistImg, RecentSongs } from "../../MusicProvider/MusicProvider";
const Rightside = () => {
  // RecentSongs ,ArtistImg
  return (
    <>
      <div className="Rightside">
        {/* <div className="tagss">
          <div className="tagsname">
            Tags <RxCross2 />
          </div>
          <div className="tagsnameiccon">
            <button className="button">
              Piano jazz
              <div className="iccon">
                <CiMusicNote1 />
              </div>
            </button>
            <button className="button">
              # Trends
              <div className="iccon">
                <IoTrendingUp />
              </div>
            </button>
            <button className="button">
              # English
              <div className="iccon">
                <CiMusicNote1 />
              </div>
            </button>
          </div>
        </div> */}
        <div className="RecentSongs">
          <div className="tagsname">
            Top songs
            <div className="seeMore">See more</div>
          </div>
          {RecentSongs.map((i, index) => (
            <div className="recentsongg" id={i.id}>
              <div className="songrecentimg">
                <img src={i.musicImg} alt="" />
              </div>
              <div className="songrecentName">
                <div className="songNameii">{i.musicAlbumGroup}</div>
                <div className="songNamewriter">Taylor Swift</div>
              </div>
              <div className="songrecentDate">
                <div className="playicon">
                  {" "}
                  <FaPlayCircle />{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="SongsImgplay">
          <div className="songimageplay">
            Top Artists
            <div className="seeMore">See more</div>
          </div>
          <div className="songnamePlayi">
            {ArtistImg.map((i, index) => (
              <Artist data={i} id={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightside;
