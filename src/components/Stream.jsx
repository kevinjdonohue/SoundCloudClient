import React from 'react';
import PropTypes from 'prop-types';

export default function Stream({ tracks = [] }) {
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

Stream.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, track: PropTypes.string }))
    .isRequired,
};
