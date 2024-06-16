/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./SongItemList.css";
import { useNavigate } from "react-router-dom";
const SongItemList = ({ data, id }) => {
  const songItem = useNavigate();
  return (
    <>
      <div
        className="songlist"
        onDoubleClick={() => songItem(`/SongItem/${id}`)}
      >
        <ul>
          <div className="Titlei">
            <div className="songrecentseris">{data.SerialNo}</div>
            <div className="songrecentimgplay">
              <img src={data.musicImg} alt="" />
            </div>
            <div className="AlbumNameti">
              <h5 className="songli">{data.musicAlbumGroup}</h5>
              <h5 className="songliWritter">{data.musicAlbumWriter}</h5>
            </div>
          </div>
          <div className="Titlei">{data.musicAlbumGroup}</div>
          <div className="Titleiii">{data.musicAlbumDate} hourse ago</div>
          <div className="Titleii">{data.musicAlbumTime}</div>
        </ul>
      </div>
    </>
  );
};

export default SongItemList;
