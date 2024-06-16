/* eslint-disable no-unused-vars */
import React from "react";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const handleClick = async () => {
    const client_id = "f26ee9d1f49d414285ef9b1c66231bca";
    const redirect_uri = "https://tunify-flax.vercel.app/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <>
      <button onClick={handleClick}>Connect Spotify</button>
    </>
  );
};

export default Login;
