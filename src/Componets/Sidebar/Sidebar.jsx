/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { VscLibrary } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { CiMicrophoneOn } from "react-icons/ci";
import { GiLoveSong } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar">
        <div className="navigationlogo">
          <div className="logoimg">
            <img src="./img/musium_logo-removebg-preview.png" alt="" />
          </div>
          <div className="logoname">Tunify</div>
        </div>
        <div className="navigation">
          <ul>
            <Link to={"/"} className="Li">
              <li>
                <span className="icons">
                  <MdHomeFilled />
                </span>
                <span>Home</span>
              </li>
            </Link>
            <Link to={"/"} className="Li">
              <li>
                <span className="icons">
                  <SiYoutubeshorts />
                </span>
                <span>Shorts</span>
              </li>
            </Link>
            <Link to={"/MusicAlbum/"} className="Li">
              <li>
                <span className="icons">
                  <FaYoutube />
                </span>
                <span>Albums</span>
              </li>
            </Link>
            <Link to={"/"} className="Li">
              <li>
                <span className="icons">
                  <CiMicrophoneOn />
                </span>
                <span>Podcast</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className="navigationtw">
          <ul>
            <Link to={"/Like/"} className="Li">
              <li>
                <span className="icons">
                  <VscLibrary />
                </span>
                <span className="likespan">Your Library</span>
                <span className="iconplus">
                  <GoPlus />
                </span>
              </li>
            </Link>

            <Link to={"/"} className="Li">
              <li>
                <span className="icons">
                  <GiLoveSong />
                </span>
                <span className="likespan">Songs</span>
              </li>
            </Link>
            <Link to={"/"} className="Li">
              <li>
                <span className="iconlike">
                  <IoMdHeart />
                </span>
                <span className="likespan">Liked Songs</span>
              </li>
            </Link>
          </ul>
          <div className="Logout" onClick={() => navigate(-1)}>
            <div className="Li">
              <li>
                <span className="icons">
                  <IoIosLogOut />
                </span>
                <span>Logout</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
