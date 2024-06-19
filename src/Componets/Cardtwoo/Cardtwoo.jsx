/* eslint-disable no-unused-vars */
import React from "react";
import "./Cardtwoo.css";
import { FaPlayCircle } from "react-icons/fa";
const Cardtwoo = () => {
  return (
    <>
      <div className="card-container">
        <div className="cardnew">
          <img src="./img/poster 1.png" alt="" className="card-img" />
          <div className="card-body">
            <h2 className="namei">Loki</h2>
            <h6 className="dess">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              nemo odit eius laudantium eveniet facere.
            </h6>
            <button className="watchlist-btn">
              <div className="playicon">
                <FaPlayCircle />
              </div>
              <div className="playtex">Play Now</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardtwoo;
