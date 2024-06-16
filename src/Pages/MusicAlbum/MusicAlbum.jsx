/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "./MusicAlbum.css";
import { CiClock2 } from "react-icons/ci";
import BannerSection from "../../Componets/BannerSection/BannerSection";
import SongItemList from "../../Componets/SongItemList/SongItemList";
import { Playlist } from "../../MusicProvider/MusicProvider";
import { useStateProvider } from "../../Utils/StateProvider";
import axios from "axios";
import { ReducerCases } from "../../Utils/Constants";
const MusicAlbum = () => {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: ReducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);
  return (
    <>
      <div className="MusicAlbumm">
        <BannerSection />

        {/* Problem */}
        {/* <div className="topbottomalbumlist">
          <div className="headerlist">
            <ul>
              <div className="Titlei"># Title</div>
              <div className="Titlei">Album</div>
              <div className="Titleiii">Date Added</div>
              <div className="Titleii">
                <CiClock2 />
              </div>
            </ul>
          </div>

          {Playlist.map((i, index) => (
            <SongItemList data={i} id={index} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default MusicAlbum;
