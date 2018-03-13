import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';

const tracks = [
  {
    id: 1,
    title: 'Some track',
  },
  {
    id: 2,
    title: 'Some other track',
  },
  {
    id: 3,
    title: 'Hot New Track',
  },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
