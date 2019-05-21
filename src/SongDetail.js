import React from "react";
import { connect } from "react-redux";

function App({ selected }) {
  if (!selected) {
    return <div>Please Select a song</div>;
  }
  return (
    <div>
      Song Detail
      <p>
        Title: {selected.title}
        <br />
        Duration: {selected.duration}
      </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    selected: state.selectedSongReducer
  };
};

export default connect(mapStateToProps)(App);
