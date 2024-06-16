/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './SongsPlaydisplay.css'
import { useNavigate } from 'react-router-dom';
import MusicAlbum from '../../Pages/MusicAlbum/MusicAlbum';
const SongsPlaydisplay = ({dataa,id,}) => {
  console.log(id);
  const navigate = useNavigate() ;
  return (
    <>
      <div
        className="card"
        key={dataa.id}
        onClick={()=>navigate(`/MusicAlbum/${id}`)}
      >
        <div className="albumimg">
          <img src={dataa.images[0].url} />
        </div>

        {/* <div className="playho"></div> */}
        <div className="text">
          <div className="top">{dataa.name}</div>
          <div className="bottom">{dataa.description}</div>
        </div>
      </div>
    </>
  )
}

export default SongsPlaydisplay

