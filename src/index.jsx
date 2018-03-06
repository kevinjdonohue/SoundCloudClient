import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<Stream tracks={tracks} />, document.getElementById('app'));

module.hot.accept();
