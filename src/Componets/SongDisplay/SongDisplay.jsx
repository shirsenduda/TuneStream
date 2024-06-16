/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./SongDisplay.css";
import { Musicdata } from "../../MusicProvider/MusicProvider";
import { useStateProvider } from "../../Utils/StateProvider";
import axios from "axios";
import { ReducerCases } from "../../Utils/Constants";
import SongsPlaydisplay from "../SongsPlaydisplay/SongsPlaydisplay";
import ErrorBoundary from "../ErrorBoundary";
export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items;
      console.log(playlists);
      dispatch({ type: ReducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <ErrorBoundary>
      <div className="SongsDispalySection">
        <div className="topsongsdisplay">Top Collections</div>

        {playlists.map((dataa, id) => (
          <SongsPlaydisplay dataa={dataa} id={id} />
        ))}
      </div>
    </ErrorBoundary>
  );
}
