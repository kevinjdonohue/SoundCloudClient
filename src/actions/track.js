/* eslint-disable import/prefer-default-export */

import * as actionTypes from '../constants/actionTypes';

export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks,
  };
}
