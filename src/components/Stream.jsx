import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Stream({ tracks }) {
  return (
    <div>
      {tracks.map(track => (
        <div className="track" key={track.id}>
          {track.title}
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  const tracks = state.track;

  return {
    tracks,
  };
}

Stream.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, track: PropTypes.string })),
};

Stream.defaultProps = {
  tracks: [],
};

export default connect(mapStateToProps)(Stream);
