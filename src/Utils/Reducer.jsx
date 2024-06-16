import { ReducerCases } from "./Constants";

export const initialState = {
  token: null,
  //   userInfo: null,
    playlists: [],
  //   currentPlaying: null,
  //   playerState: false,
  //   selectedPlaylist: null,
    selectedPlaylistId: "37i9dQZF1E37jO8SiMT0yN",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case ReducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case ReducerCases.SET_PLAYLISTS : {
      return {
        ...state,
        playlists: action.playlists,
      }
    }
    default:
      return state;
  }
};

export default Reducer;
