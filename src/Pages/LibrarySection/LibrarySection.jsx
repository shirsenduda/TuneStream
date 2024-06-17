/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./LibrarySection.css";
import { useStateProvider } from "../../Utils/StateProvider";
import axios from "axios";
import { ReducerCases } from "../../Utils/Constants";
import SongsPlaydisplay from "../../Componets/SongsPlaydisplay/SongsPlaydisplay";
import ErrorBoundary from "../../Componets/ErrorBoundary/";
import { Musicdata } from "../../MusicProvider/MusicProvider";

const Playlists = () => {
  // const [{ token, playlists }, dispatch] = useStateProvider();
  // useEffect(() => {
  //   const getPlaylistData = async () => {
  //     const response = await axios.get(
  //       "https://api.spotify.com/v1/me/playlists",
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const { items } = response.data;
  //     const playlists = items;
  //     console.log(playlists);
  //     dispatch({ type: ReducerCases.SET_PLAYLISTS, playlists });
  //   };
  //   getPlaylistData();
  // }, [token, dispatch]);

  return (
    <ErrorBoundary>
      <div className="SongsDispalySection">
        <div className="topsongsdisplay">Top Playlist</div>

        {Musicdata.map((dataa, id) => (
          <SongsPlaydisplay dataa={dataa} id={id} />
        ))}
      </div>
    </ErrorBoundary>
  );
}
 export default Playlists ;