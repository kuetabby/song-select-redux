import React from "react";
import { connect } from "react-redux";
import { selectSong } from "./actions";

function App(props) {
  const renderList = () => {
    return props.songs.map((song, i) => {
      return (
        <div className="item" key={i}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="ui devided list">{renderList()}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    songs: state.songReducer
  };
};
export default connect(
  mapStateToProps,
  { selectSong }
)(App);
