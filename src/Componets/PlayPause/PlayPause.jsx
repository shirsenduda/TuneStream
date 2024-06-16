/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./PlayPause.css";
import 'remixicon/fonts/remixicon.css'
import { PiShuffleFill } from "react-icons/pi";
import { IoMdSkipBackward } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { TbRepeat } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdDevicesOther } from "react-icons/md";
import { RiVolumeUpFill } from "react-icons/ri";
import { RiFullscreenExitFill } from "react-icons/ri";
import { PiPauseFill } from "react-icons/pi";
const PlayPause = () => {
  const [icon, seticon] = useState(true);
  const playPause = ()=>{
    seticon((i)=>!i)
  }
  return (
    <>
      <div className="preview">
        <div className="previeww">
          <div className="firstpart">
            <div className="musicAlbum">
              <img
                src="https://images.unsplash.com/photo-1515010137531-66995c7f40e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29uZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div className="musicAlbumname">
              <p className="p">Fifthy Shades</p>
              <p className="desalbum">
                Lorem ipsum dolor
              </p>
            </div>
            <div className="musiclike">
              <label className="ui-like">
                <input type="checkbox" />
                <div className="like">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill=""
                  >
                    <g strokeWidth="4" stroke="#FFF" id="SVGRepo_bgCarrier"></g>
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      id="SVGRepo_tracerCarrier"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path>
                    </g>
                  </svg>
                </div>
              </label>
            </div>
          </div>
          <div className="socondtpart">
            <div className="playpausebt">
              <div className="playpausebtt">
                <PiShuffleFill />
              </div>
              <div className="playpausebtt">
                <IoMdSkipBackward />
              </div>

              <div className="circlepause" onClick={playPause}>
                {icon === true ? (
                  <i className="ri-play-large-fill playyy"></i>
                ) : (
                  <i className="ri-pause-fill imgii"></i>
                )}
              </div>
              <div className="playpausebtt">
                <IoMdSkipForward />
              </div>
              <div className="playpausebtt">
                <TbRepeat />
              </div>
            </div>
            <div className="playpausebttt">
              <div className="backtime">1:20</div>
              <div className="sickbar"></div>
              <div className="fortime">3.20</div>
            </div>
          </div>
          <div className="thirdpart">
            
            
            <div className="thirdpartt">
              <RiVolumeUpFill />
            </div>
            <div className="sickbartw"></div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayPause;
