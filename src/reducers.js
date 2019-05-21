import { SELECT_SONG } from "./constants";
import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Afterlife", duration: "3:40" },
    { title: "Bat Country", duration: "2:40" },
    { title: "Beast and the Harlot", duration: "3:00" },
    { title: "Dancing Dead", duration: "3:20" },
    { title: "Dear God", duration: "3:30" },
    { title: "A Little Peace of Heaven", duration: "8:20" }
  ];
};

const selectedSongReducer = (state = null, action = {}) => {
  switch (action.type) {
    case SELECT_SONG:
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  songReducer,
  selectedSongReducer
});

export default reducer;
