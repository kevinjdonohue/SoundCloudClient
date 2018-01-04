import React from 'react';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const doc = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const win = doc.window;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.React = React;
global.expect = expect;
global.shallow = shallow;
