import React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';

describe('Deck component', () => {
  it('renders Deck', () => {
    const item = [{ _id: 'some stuff', name: 'thing' }];
    
    const wrapper = shallow(
      <Deck title='hello'>
        {item}
      </Deck>);
    expect(wrapper).toMatchSnapshot();
  });
});
