/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./TopNavv.css";
import { RiUserLine } from "react-icons/ri";
import "remixicon/fonts/remixicon.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TopNavv = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("shirsendu");
  const [imgUser, setimgUser] = useState("https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww");
  // useEffect(() => {
  //   apiClient.get("me").then((response) => {
  //     setname(response.data.display_name);
  //     setimgUser(response.data.images[0].url);
  //   });
  // }, []);
  return (
    <>
      <div className="Topnav">
        <div className="firsttop">
          <div className="leftarrrow" onClick={() => navigate(-1)}>
            <IoIosArrowBack />
          </div>
          <div className="leftarrrow" onClick={() => navigate(1)}>
            <IoIosArrowForward />
          </div>
        </div>
        <div className="midddtop">
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" className="input" />
          </div>
        </div>
        <div className="lasttttop">
          <div className="notification">
            <svg viewBox="0 0 448 512" className="bell">
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
          </div>
          <div className="Mainprofilediv">
            <div className="profileimg">
              <img src={imgUser} alt="" />
            </div>
            <div className="profilestore">
              <p className="Namei">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavv;
