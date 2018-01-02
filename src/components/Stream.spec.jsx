import React from 'react';
import { shallow } from 'enzyme';
import Stream from './Stream';

describe('Stream', () => {
  const props = {
    tracks: [{ id: 1, title: 'x' }, { id: 2, title: 'y' }],
  };

  it('shows two elements', () => {
    // arrange & act
    const element = shallow(<Stream {...props} />);

    // assert
    expect(element.find('.track')).to.have.length(2);
  });
});
