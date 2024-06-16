/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Artist.css";
import { useNavigate } from "react-router-dom";
const Artist = ({data,id}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="Artist" id={data.id} onClick={()=>navigate(`/ArtistAlbum/${id}`)}>
        <img src={data.Artistimage} alt="" />
        
      </div>
    </>
  );
};

export default Artist;
