import { SELECT_SONG } from "./constants";

export const selectSong = name => {
  return {
    type: SELECT_SONG,
    payload: name
  };
};
